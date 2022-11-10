import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  //private products: Product[] = [];
  constructor(@InjectModel('products') private productModel: Model<Product>) {}
  async insertProduct(
    title: string,
    description: string,
    price: number,
    quantity: number,
    imageUrl: string,
  ) {
    const newProduct = new this.productModel({
      title,
      description,
      price,
      quantity,
      imageUrl,
    });

    await newProduct.save();
  }

  getProducts() {
    return this.productModel.find();
  }

  async getSingleProduct(productId: any) {
    return await this.productModel.findById(productId);
  }

  async updateProduct(
    productId: any,
    title: string,
    description: string,
    price: number,
    quantity: number,
    imageUrl: string,
  ) {
    await this.productModel.updateOne(
      { _id: productId },
      { title, description, price },
    );
  }

  async deleteProduct(prodId: string) {
    await this.productModel.findByIdAndDelete(prodId);
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
