import { Injectable } from '@nestjs/common';
import { IContactsRepository } from 'src/application/repositories/IContactsRepository';
import {
  ContatoByCategoryModel,
  ContatoModel,
} from 'src/domain/models/Contact';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class ContatosRepository implements IContactsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.contato.findMany();
  }

  async getContactsByCategory(categoryId: string): Promise<
    (ContatoByCategoryModel & {
      contanto: ContatoModel;
    })[]
  > {
    const result = await this.prisma.contatoCategoria.findMany({
      where: {
        idCategoria: parseInt(categoryId),
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
