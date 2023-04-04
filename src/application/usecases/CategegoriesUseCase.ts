import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

export class CategoriesUseCase {
  constructor(private repository: ICategoriesRepository) {}

  async execute() {
    return this.repository.all();
  }
}
