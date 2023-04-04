import { Injectable } from '@nestjs/common';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

@Injectable()
export class CategoriesUseCase {
  constructor(private repository: ICategoriesRepository) {}

  async execute() {
    return await this.repository.all();
  }
}
