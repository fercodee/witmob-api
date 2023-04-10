import { Injectable } from '@nestjs/common';
import { IClientsRepository } from 'src/application/repositories/IClientesRepository';
import {
  ClienteBySegmentoModel,
  ClienteModel,
} from 'src/domain/models/Cliente';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class ClientesRepository implements IClientsRepository {
  constructor(private prisma: PrismaService) {}

  async getContactsByCategory(categoryId: string): Promise<
    (ClienteBySegmentoModel & {
      cliente: ClienteModel;
    })[]
  > {
    const result = await this.prisma.clienteSegmento.findMany({
      where: {
        idSegmento: parseInt(categoryId),
      },
      include: {
        cliente: true,
      },
    });

    return result;
  }

  async refreshContacts(): Promise<void> {
    throw new Error('Not implemented');
  }
}
