import { Categoria } from 'src/domain/models/Categoria';

export abstract class ICategoriesRepository {
  abstract all(): Promise<Categoria[]>;
}
