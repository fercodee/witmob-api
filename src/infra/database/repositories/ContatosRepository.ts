import { Injectable } from '@nestjs/common';
import { IContactsRepository } from 'src/application/repositories/IContactsRepository';
import { Contanto, ContatoByCategoryModel } from 'src/domain/models/Contact';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class ContatosRepository implements IContactsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.contato.findMany();
  }

  async getContactsByCategory(
    id: string,
  ): Promise<(ContatoByCategoryModel & { contanto: Contanto })[]> {
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

  async refreshContacts(): Promise<void> {
    throw new Error('Not implemented');
  }
}
