import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserDto } from './user.dto';
import { UserInterface } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserInterface>,
    ) {}

    public async create(userData: UserDto): Promise<UserInterface> {
        return await this.userModel.create({_id: Types.ObjectId(), ...userData}).populate('Cart');;
    }
    public async getAll(): Promise<UserInterface[]> {
        return await this.userModel.find();
    }
    public async delete(id: string) {
        return await this.userModel.deleteOne({_id: id});
    }
    public async getById(id: string): Promise<UserInterface> {
        return await this.userModel.findOne({_id: id});
    }
}