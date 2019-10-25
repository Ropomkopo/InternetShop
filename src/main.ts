import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocument, SwaggerBaseConfig } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { ValidationPipe, INestApplication } from '@nestjs/common';
import { ErrorsInterceptor } from './interceptor/interceptor';

async function bootstrap(): Promise<void> {
  const config: ConfigService = new ConfigService();
  const app: INestApplication = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  app.enableCors();
  const swagger_url: string = config.get('swagger_url');
  const port: string = config.get('port');
  const host: string = config.get('host');
  if (swagger_url) {
    const options: SwaggerBaseConfig = new DocumentBuilder()
      .setTitle('Api documentation')
      .setVersion('1.0')
      .build();
    const document: SwaggerDocument = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(swagger_url, app, document);

  }
  await app.listen(3000, host, () => {
    console.log(`Server is running http://${host}:${port}/`);
    if (swagger_url) {
      console.log(`Swagger is running http://${host}:${3000}/${swagger_url}`);
    }
  });
}

bootstrap();
