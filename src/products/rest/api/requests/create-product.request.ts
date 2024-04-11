import { Prop } from '@nestjs/mongoose';
import { Category, PromotionType } from '../../../model/product.schema';
import { IsNumber, IsString, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductRequest {
  @IsString() name: string;
  @IsUrl() picture: URL;
  @IsNumber() basePrice: number;
  @Type(() => Promotion) categories: Category[];
  @Type(() => Promotion) promotions: Promotion[];
}

export class Promotion {
  @Prop() type: PromotionType;
  @IsNumber() amount: number;
}
