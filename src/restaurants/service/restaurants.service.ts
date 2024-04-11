import { Injectable, Logger } from '@nestjs/common';
import { CreateRestaurantRequest } from '../rest/api/requests/create-restaurant.request';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from '../model/restaurant.schema';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}

  async create(request: CreateRestaurantRequest): Promise<Restaurant> {
    Logger.log(`Creating a new restaurant ${JSON.stringify(request)}`);
    return new this.restaurantModel(request).save();
  }

  async findAll(): Promise<Restaurant[]> {
    Logger.log(`Finding all restaurants`);
    return this.restaurantModel.find();
  }

  async findOne(id: number): Promise<Restaurant> {
    Logger.log(`Finding a restaurant by id: ${id}`);
    return this.restaurantModel.findById(id);
  }

  async remove(id: number): Promise<Restaurant> {
    Logger.log(`Finding a restaurant by id: ${id}`);
    return this.restaurantModel.findByIdAndDelete(id);
  }
}
