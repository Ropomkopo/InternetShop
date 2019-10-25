import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { Controller, Post, Req, Res, Body, Get, Delete, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

@ApiUseTags('User')
@Controller('user')
export class UserController {
  constructor(
      private readonly userService: UserService,
  ) {}
  @Post()
  async editUser(@Req() request: Request, @Res() res: Response, @Body() productData: UserDto): Promise<any> {
    const responseData = await this.userService.create(productData);
    res.status(200).json(responseData);
  }
  @Get()
  async getall(@Res() res: Response) {
    const responseData = await this.userService.getAll();
    res.status(200).json(responseData);
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const responseData = await this.userService.delete(id);
    res.status(200).json(responseData);
  }
}