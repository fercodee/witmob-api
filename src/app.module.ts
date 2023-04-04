import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IContactsRepository } from './application/repositories/IContactsRepository';
import { ContactsUseCase } from './application/usecases/ContactsUseCase';
import { ContatosRepository } from './infra/database/repositories/ContatosRepository';
import { PrismaService } from './infra/prisma.service';
import { ContactsController } from './presentation/controllers/ContactsController';
import { ICategoriesRepository } from './application/repositories/ICategoriesRepository';
import { CategoriaRepository } from './infra/database/repositories/CategoriaRepository';
import { CategoriesUseCase } from './application/usecases/CategegoriesUseCase';
import { CategoryController } from './presentation/controllers/CategoryController';

@Module({
  imports: [],
  controllers: [AppController, ContactsController, CategoryController],
  providers: [
    AppService,
    PrismaService,
    ContactsUseCase,
    {
      provide: IContactsRepository,
      useClass: ContatosRepository,
    },
    CategoriesUseCase,
    {
      provide: ICategoriesRepository,
      useClass: CategoriaRepository,
    },
  ],
})
export class AppModule {}
