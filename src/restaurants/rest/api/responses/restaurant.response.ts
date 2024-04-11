import { PartialType } from '@nestjs/mapped-types';
import { Restaurant } from '../../../model/restaurant.schema';

export class RestaurantResponse extends PartialType(Restaurant) {
  createdAt: Date;
  updated: Date;
}
