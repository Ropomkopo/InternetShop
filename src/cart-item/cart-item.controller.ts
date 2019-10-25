import { CartItemService } from './cart-item.service';
import { CartItemDto } from './cart-Item.dto';
import { Controller, Post, Res, Body, Get, Delete, Param} from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiUseTags('CartItem')
@Controller('cartItem')
export class CartItemController {
  constructor(
      private readonly cartItemService: CartItemService,
  ) {}
  @Post()
  async createCartItem(@Res() res: Response, @Body() cartItemData: CartItemDto): Promise<any> {
    const responseData = await this.cartItemService.create(cartItemData);
    res.status(200).json(responseData);
  }
  @Get()
  async getall(@Res() res: Response) {
    const responseData = await this.cartItemService.getAll();
    res.status(200).json(responseData);
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const responseData = await this.cartItemService.delete(id);
    res.status(200).json(responseData);
  }
}