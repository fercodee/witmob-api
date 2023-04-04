import { Controller, Get } from '@nestjs/common';
import { CategoriesUseCase } from 'src/application/usecases/CategegoriesUseCase';
import { Categoria } from 'src/domain/models/Categoria';

@Controller('categories')
export class CategoryController {
  constructor(private useCase: CategoriesUseCase) {}

  @Get()
  async findAll(): Promise<Categoria[]> {
    try {
      return await this.useCase.execute();
    } catch (error) {
      return error;
    }
  }
}
