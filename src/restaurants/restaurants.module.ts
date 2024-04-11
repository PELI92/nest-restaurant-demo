import { Module } from '@nestjs/common';
import { RestaurantsService } from './service/restaurants.service';
import { RestaurantsController } from './controller/restaurants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './model/restaurant.schema';
import { Restaurant } from './model/restaurant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
