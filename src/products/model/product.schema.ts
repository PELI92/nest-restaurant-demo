import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'products', timestamps: true })
export class Product {
  @Prop() name: string;
  @Prop() picture: URL;
  @Prop() basePrice: number;
  @Prop() categories: Category[];
  @Prop() promotions: Promotion[];
}

export class Promotion {
  @Prop() type: PromotionType;
  @Prop() amount: number;
}

export enum Category {
  AMERICAN,
  ITALIAN,
  MEXICAN,
  ASIAN,
  ARGENTINIAN,
  VEGETARIAN,
  VEGAN,
  GLUTEN_FREE,
}

export enum PromotionType {
  PERCENTAGE,
  FIXED,
}

export const ProductSchema = SchemaFactory.createForClass(Product);
