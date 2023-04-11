import { Controller, Get } from '@nestjs/common';
import { SegmentoUseCase } from 'src/application/usecases/SegmentoUseCase';
import { Segmento } from 'src/domain/models/Segmento';

@Controller('segments')
export class CategoryController {
  constructor(private useCase: SegmentoUseCase) {}

  @Get()
  async findAll(): Promise<Segmento[]> {
    try {
      return await this.useCase.execute();
    } catch (error) {
      return error;
    }
  }
}
