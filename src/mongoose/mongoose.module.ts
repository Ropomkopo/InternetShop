import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import { MongooseService } from './mongoose.service';
import { MongooseModule as mongoose_module } from '@nestjs/mongoose';
@Module({
  providers: [MongooseService],
  imports: [
    mongoose_module.forRootAsync({
      useClass: MongooseService,
    }),
  ],
})
export class MongooseModule {}