import { CategoryService } from './category.service';
import { CreateCategoryDto } from './category.dto';
import { Controller, Post, Req, Res, Body, Get, Delete, Param, Patch } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiUseTags('Category')
@Controller('category')
export class CategoryController {
  constructor(
      private readonly categoryService: CategoryService,
  ) {}
  @Post()
  async editUser(@Res() res: Response, @Body() catgoryData: CreateCategoryDto): Promise<any> {
    const responseData = await this.categoryService.create(catgoryData);
    res.status(200).json(responseData);
  }
  @Get()
  async getall(@Res() res: Response) {
    const responseData = await this.categoryService.getAll();
    res.status(200).json(responseData);
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const responseData = await this.categoryService.delete(id);
    res.status(200).json(responseData);
  }
}