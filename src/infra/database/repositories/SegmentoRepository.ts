import { Injectable } from '@nestjs/common';
import { ICategoriesRepository } from 'src/application/repositories/ISegmentoRepository';
import { Segmento } from 'src/domain/models/Segmento';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class CategoriaRepository implements ICategoriesRepository {
  constructor(private prisma: PrismaService) {}

  async all(): Promise<Segmento[]> {
    const result = await this.prisma.segmento.findMany();
    return result;
  }
}
