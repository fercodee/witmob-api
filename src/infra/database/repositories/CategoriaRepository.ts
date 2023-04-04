import { Injectable } from '@nestjs/common';
import { ICategoriesRepository } from 'src/application/repositories/ICategoriesRepository';
import { Categoria } from 'src/domain/models/Categoria';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class CategoriaRepository implements ICategoriesRepository {
  constructor(private prisma: PrismaService) {}

  async all(): Promise<Categoria[]> {
    const result = await this.prisma.categoria.findMany();
    return result;
  }
}
