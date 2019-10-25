import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CategoryInterface } from './category.model';
import { CreateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private readonly CategoryModel: Model<CategoryInterface>,
    ) {}

    public async create(categoryData: CreateCategoryDto): Promise<CategoryInterface> {
        return await this.CategoryModel.create({_id: Types.ObjectId(), ...categoryData});
    }
    public async getAll(): Promise<CategoryInterface[]> {
        return await this.CategoryModel.find();
    }
    public async delete(id: string) {
        return await this.CategoryModel.deleteOne({_id: id});
    }
    public async getById(id: string): Promise<CategoryInterface> {
        return await this.CategoryModel.findOne({_id: id});
    }
}