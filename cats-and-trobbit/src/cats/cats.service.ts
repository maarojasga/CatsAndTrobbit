import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async create(catData: CreateCatDto): Promise<Cat> {
    const newCat = new this.catModel(catData);
    return newCat.save();
  }

  async update(id: string, catData: UpdateCatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, catData, { new: true }).exec();
  }

  async delete(id: string): Promise<Cat> {
    return this.catModel.findByIdAndDelete(id).exec();
  }
}
