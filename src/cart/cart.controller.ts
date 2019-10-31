import { CartService } from './cart.service';
import { CartDto } from './cart.dto';
import { Controller, Post, Res, Body, Get, Delete, Param, Patch } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiUseTags('Cart')
@Controller('Cart')
export class CartController {
  constructor(
      private readonly cartService: CartService,
  ) {}
  @Post()
  async editUser(@Res() res: Response, @Body() cartData: CartDto): Promise<any> {
    const responseData = await this.cartService.create(cartData);
    res.status(200).json(responseData);
  }
  @Get()
  async getall(@Res() res: Response) {
    const responseData = await this.cartService.getAll();
    res.status(200).json(responseData);
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const responseData = await this.cartService.delete(id);
    res.status(200).json(responseData);
  }
}