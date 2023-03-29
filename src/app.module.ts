import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IContactsRepository } from './application/repositories/IContactsRepository';
import { ContactsUseCase } from './application/usecases/ContactsUseCase';
import { ContatosRepository } from './infra/database/repositories/ContatosRepository';
import { PrismaService } from './infra/prisma.service';
import { ContactsController } from './presentation/controllers/ContactsController';

@Module({
  imports: [],
  controllers: [AppController, ContactsController],
  providers: [
    AppService,
    PrismaService,
    ContactsUseCase,
    {
      provide: IContactsRepository,
      useClass: ContatosRepository,
    },
  ],
})
export class AppModule {}
