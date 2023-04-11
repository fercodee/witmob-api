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

  async refreshClients(): Promise<void> {
    const clients = await this.prisma.cliente.findMany();
    for (let index = 0; index < clients.length; index++) {
      const element = clients[index];
      const segments = element.segmento.split(',');
      segments.forEach(async (v) => {
        await this.prisma.clienteSegmento.create({
          data: {
            idCliente: element.id,
            idSegmento: parseInt(v),
          },
        });
      });
    }
  }
}
