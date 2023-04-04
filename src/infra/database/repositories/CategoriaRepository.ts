import { PrismaService } from 'src/infra/prisma.service';

export class CategoriaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.categoria.findMany();
  }
}
