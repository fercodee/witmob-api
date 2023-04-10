import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IClientsRepository } from './application/repositories/IClientesRepository';
import { ClienteUseCase } from './application/usecases/ClientesUseCase';
import { ClientesRepository } from './infra/database/repositories/ClientesRepository';
import { PrismaService } from './infra/prisma.service';
import { ContactsController } from './presentation/controllers/ContactsController';
import { ICategoriesRepository } from './application/repositories/ISegmentoRepository';
import { CategoriaRepository } from './infra/database/repositories/SegmentoRepository';
import { SegmentoUseCase } from './application/usecases/SegmentoUseCase';
import { CategoryController } from './presentation/controllers/CategoryController';

@Module({
  imports: [],
  controllers: [AppController, ContactsController, CategoryController],
  providers: [
    AppService,
    PrismaService,
    ClienteUseCase,
    {
      provide: IClientsRepository,
      useClass: ClientesRepository,
    },
    SegmentoUseCase,
    {
      provide: ICategoriesRepository,
      useClass: CategoriaRepository,
    },
  ],
})
export class AppModule {}
