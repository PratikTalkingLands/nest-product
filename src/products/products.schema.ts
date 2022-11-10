import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema()

export class ProductSchema {
    // @Prop()
    // id: string;
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    price: number;

}

export const Products = SchemaFactory.createForClass(ProductSchema)