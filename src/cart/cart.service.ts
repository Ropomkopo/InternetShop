import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CartInterface } from './cart.model';
import { CartDto } from './cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectModel('Cart') private readonly cartModel: Model<CartInterface>,
    ) {}

    public async create(cartData: CartDto): Promise<CartInterface> {
        return await this.cartModel.create({_id: Types.ObjectId(), ...cartData});
    }
    public async getAll(): Promise<CartInterface[]> {
        return await this.cartModel.find();
    }
    public async delete(id: string) {
        return await this.cartModel.deleteOne({_id: id});
    }
    public async getById(id: string): Promise<CartInterface> {
        return await this.cartModel.findOne({_id: id});
    }
}