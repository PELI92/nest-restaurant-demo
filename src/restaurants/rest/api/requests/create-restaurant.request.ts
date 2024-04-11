import {
  IsEnum,
  IsInt,
  IsMilitaryTime,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';
import { Day } from '../../../model/restaurant.schema';

export class Address {
  @IsString() street: string;
  @IsInt() number: number;
  @IsString() city: string;
  @IsString() neighbour: string;
}
export class WorkingSchedule {
  @IsEnum(Day) day: Day;
  @ValidateNested({ each: true })
  @Type(() => Hours)
  hours: Hours[];
}

export class Hours {
  @IsMilitaryTime() from: string;
  @IsMilitaryTime() to: string;
}

export class CreateRestaurantRequest {
  @IsString() name: string;
  @IsUrl() picture: URL;
  @ValidateNested()
  @Type(() => Address)
  address: Address;
  @ValidateNested({ each: true })
  @Type(() => WorkingSchedule)
  workingSchedule: WorkingSchedule[];
}
