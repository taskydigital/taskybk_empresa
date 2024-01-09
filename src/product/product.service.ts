import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { Workbook } from 'exceljs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>,
    private jwtAuthServ: JwtService) { }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async excel2Product(file: Express.Multer.File) {
    // console.log(file);
    const thisArray: Product[] = [];
    // const pictArray: string[] = [];
    const workbook = new Workbook();
    await workbook.xlsx.readFile(file.path).then((workbook) => {
      const worksheetProd = workbook.getWorksheet("staff");
      const headerRows = 2;
      const staffRowC = worksheetProd.actualRowCount; // determine the range of populated data
      for (let i = headerRows; i <= staffRowC; i++) {
        const formData = {
          'id': worksheetProd.getRow(i).getCell(1).text || '',
          'name': worksheetProd.getRow(i).getCell(2).text || '',
          'description': worksheetProd.getRow(i).getCell(3).text || '',
        }
        thisArray.push(formData as unknown as Product);
      }
    });
    await this.productModel.deleteMany();
    await this.productModel.insertMany(thisArray).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });

  }

  findAll() {
    // const all = await this.productModel.find();
    // return all;
    // console.log(toto);
    return this.productModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
