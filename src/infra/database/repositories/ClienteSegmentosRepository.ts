import { Injectable } from "@nestjs/common";
import { IClientesSegmentos } from "src/application/repositories/IClientesSegmentos";
import { PrismaService } from "src/infra/prisma.service";

@Injectable()
export class ClienteSegmentosRepository implements IClientesSegmentos {
    constructor(private prisma: PrismaService) { }

    async dropDB(): Promise<void> {
        await this.prisma.clienteSegmento.deleteMany();
        await this.prisma.cliente.deleteMany();
    }
}