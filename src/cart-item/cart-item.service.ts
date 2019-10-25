import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CartItemDto } from './cart-Item.dto';
import { ProductService } from '../product/product.service';
import { CartItemInterface } from './cartItem.model';

@Injectable()
export class CartItemService {
    constructor(
        @InjectModel('CartItem') private readonly cartItemModel: Model<CartItemInterface>,
        private readonly productService: ProductService) { }

    public async create(cartItemData: CartItemDto): Promise<CartItemInterface> {
        const product = await this.productService.getById(cartItemData.product);
        const totalSum = (cartItemData.quantity * product.price);
        return await this.cartItemModel.create({
            _id: Types.ObjectId(), productId: cartItemData.product,
            quantity: cartItemData.quantity, totalSum: totalSum
        });
    }
    public async getAll(): Promise<CartItemInterface[]> {
        return await this.cartItemModel.find();
    }
    public async delete(id: string) {
        return await this.cartItemModel.deleteOne({ _id: id });
    }
    public async getById(id: string): Promise<CartItemInterface> {
        return await this.cartItemModel.findOne({ _id: id }).populate('productId');
    }
}