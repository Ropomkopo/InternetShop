import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/InternetShop'),CategoryModule, ProductModule, CartItemModule,CartModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
