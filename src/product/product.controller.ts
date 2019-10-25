import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { Controller, Post, Req, Res, Body, Get, Delete, Param, Patch } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

@ApiUseTags('Product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }
  @Post()
  async editUser(@Req() request: Request, @Res() res: Response, @Body() productData: ProductDto): Promise<any> {
    const responseData = await this.productService.create(productData);
    res.status(200).json(responseData);
  }
  @Get()
  async getall(@Res() res: Response) {
    const responseData = await this.productService.getAll();
    res.status(200).json(responseData);
  }
  @Patch(':id')
  async editProduct(@Res() res: Response, @Param('id') id: string, @Body() productData: ProductDto) {
    const newProduct = await this.productService.patch(id, productData);
    res.status(200).json(newProduct);
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const responseData = await this.productService.delete(id);
    res.status(200).json(responseData);
  }
}