import { Injectable } from '@nestjs/common';
import { ICategoriesRepository } from '../repositories/ISegmentoRepository';

@Injectable()
export class SegmentoUseCase {
  constructor(private repository: ICategoriesRepository) {}

  async execute() {
    return await this.repository.all();
  }
}
