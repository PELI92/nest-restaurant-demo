import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { CreateProductRequest } from '../rest/api/requests/create-product.request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() request: CreateProductRequest) {
    return this.productsService.create(request);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
