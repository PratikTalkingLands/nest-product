import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProductSchema {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  quantity: number;
  @Prop()
  imageUrl: string;
}

export const Products = SchemaFactory.createForClass(ProductSchema);
