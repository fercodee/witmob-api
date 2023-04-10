import { Segmento } from 'src/domain/models/Segmento';

export abstract class ICategoriesRepository {
  abstract all(): Promise<Segmento[]>;
}
