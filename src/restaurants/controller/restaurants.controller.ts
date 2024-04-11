import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RestaurantsService } from '../service/restaurants.service';
import { CreateRestaurantRequest } from '../rest/api/requests/create-restaurant.request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() request: CreateRestaurantRequest) {
    return this.restaurantsService.create(request);
  }

  @Get()
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(+id);
  }
}
