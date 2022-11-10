import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose/dist";
import { Collection } from "mongoose";
import { ProductsController } from "./products.controller";
import { Products } from "./products.schema";
import { ProductService } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductService],
    imports: [MongooseModule.forFeature([{name: "products", schema: Products}])]
})
export class ProductsModule {}
