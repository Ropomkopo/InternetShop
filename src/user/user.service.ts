import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserDto } from './user.dto';
import { UserInterface } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly productModel: Model<UserInterface>,
    ) {}

    public async create(categoryData: UserDto): Promise<UserInterface> {
        return await this.productModel.create({_id: Types.ObjectId(), ...categoryData});
    }
    public async getAll(): Promise<UserInterface[]> {
        return await this.productModel.find();
    }
    public async delete(id: string) {
        return await this.productModel.deleteOne({_id: id});
    }
    public async getById(id: string): Promise<UserInterface> {
        return await this.productModel.findOne({_id: id});
    }
}