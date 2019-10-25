import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemSchema } from './cartItem.model';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CartItem', schema: CartItemSchema },
    ]),
    ProductModule
  ],
  providers: [CartItemService],
  controllers: [CartItemController],
})
export class CartItemModule {}