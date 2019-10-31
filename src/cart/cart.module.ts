import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemSchema } from '../cart-item/cartItem.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Cart', schema: CartItemSchema}])],
  providers: [CartService],
  controllers: [CartController],
  exports: [CartService]
})
export class CartModule {}
