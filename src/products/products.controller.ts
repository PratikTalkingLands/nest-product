import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    @Body('quantity') prodQuantity: number,
    @Body('imageUrl') prodImageUrl: string,
  ) {
    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
      prodQuantity,
      prodImageUrl,
    );
    return 'Successfylly added';
  }

  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: any) {
    return this.productService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: any,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    @Body('quantity') prodQuantity: number,
    @Body('imageUrl') prodImageUrl: string,
  ) {
    this.productService.updateProduct(
      prodId,
      prodTitle,
      prodDesc,
      prodPrice,
      prodQuantity,
      prodImageUrl,
    );
    return 'Updated';
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string): any {
    this.productService.deleteProduct(prodId);
    return { msg: 'Product deleted successfully' };
  }
}
