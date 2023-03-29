import { Contato, ContatoCategoria } from '@prisma/client';
import { IContactsRepository } from 'src/application/repositories/IContactsRepository';
import { PrismaService } from 'src/infra/prisma.service';

export class ContatosRepository implements IContactsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    await this.prisma.contato.findMany({
      where: {
        id: 1,
      },
    });
  }
  async getContactsByCategory(
    id: string,
  ): Promise<(ContatoCategoria & { contanto: Contato })[]> {
    const result = await this.prisma.contatoCategoria.findMany({
      where: {
        idCategoria: parseInt(id),
      },
      include: {
        contanto: true,
      },
    });

    return result;
  }
}
