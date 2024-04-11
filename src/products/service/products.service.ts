import { Injectable, Logger } from '@nestjs/common';
import { CreateProductRequest } from '../rest/api/requests/create-product.request';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../model/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(request: CreateProductRequest): Promise<Product> {
    Logger.log(`Creating a new product ${JSON.stringify(request)}`);
    return new this.productModel(request).save();
  }

  async findAll(): Promise<Product[]> {
    Logger.log(`Finding all products`);
    return this.productModel.find();
  }

  async findOne(id: number): Promise<Product> {
    Logger.log(`Finding a product by id: ${id}`);
    return this.productModel.findById(id);
  }

  remove(id: number) {
    Logger.log(`Removing a product by id: ${id}`);
    return this.productModel.findByIdAndDelete(id);
  }
}
