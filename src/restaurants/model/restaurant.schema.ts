import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export class Address {
  @Prop() street: string;
  @Prop() number: number;
  @Prop() city: string;
  @Prop() neighbour: string;
}
@Schema({ collection: 'restaurants', timestamps: true })
export class Restaurant {
  @Prop() name: string;
  @Prop() picture: URL;
  @Prop() address: Address;
  @Prop() workingSchedule: WorkingSchedule[];
}

export enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export class Hours {
  @Prop() from: number;
  @Prop() to: number;
}

export class WorkingSchedule {
  @Prop() day: Day;
  @Prop() hours: Hours[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
