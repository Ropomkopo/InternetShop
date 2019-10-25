import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ProductInterface } from './product.model';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<ProductInterface>,
    ) {}

    public async create(categoryData: ProductDto): Promise<ProductInterface> {
        return await this.productModel.create({_id: Types.ObjectId(), ...categoryData});
    }
    public async getAll(): Promise<ProductInterface[]> {
        return await this.productModel.find();
    }
    public async delete(id: string) {
        return await this.productModel.deleteOne({_id: id});
    }
    public async getById(id: string): Promise<ProductInterface> {
        return await this.productModel.findOne({_id: id});
    }
}