import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    //private products: Product[] = [];
    constructor(@InjectModel("products") private productModel:Model<Product>){}
    async insertProduct(title: string, description: string, price: number) {
        //const prodId = Math.random().toString()
        //const newProduct = new Product(title, description, price)

        const newProduct = new this.productModel({title, description, price})
        // this.products.push(newProduct)
        // return prodId;
        await newProduct.save()
    }

    getProducts() {
        //return [...this.products];
        return this.productModel.find()
    }

    async getSingleProduct(productId: any) {
        // const product = this.findProduct(productId)[0];
        // return {...product};
        return await this.productModel.findById(productId)
    }

    async updateProduct(productId: any, title: string, description: string, price: number) {
        // const [product, index] = this.findProduct(productId);
        // const updatedProduct = {...product}
        await this.productModel.updateOne({_id:productId}, {title, description, price})
        // if(title) {
        //     updatedProduct.title = title;
        // }
        // if(description) {
        //     updatedProduct.description = description;
        // }
        // if(price) {
        //     updatedProduct.price = price;
        // }
       // this.products[index] = updatedProduct;
    }

    async deleteProduct(prodId: string) {
        //const index = this.findProduct(prodId)
        //this.products.splice(index, 1)
        await this.productModel.findByIdAndDelete(prodId)
    }

    // private findProduct(id: string): [Product, number] {
    //     const productIndex = this.products.findIndex((prod) => prod.id === id)
    //     const product = this.products[productIndex]
    //     if(!product) {
    //         throw new NotFoundException('Could not find product');
    //     }
    //     return [product, productIndex];
    // }


}