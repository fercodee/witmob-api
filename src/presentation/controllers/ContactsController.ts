import { Controller, Get, Query } from '@nestjs/common';
import { Contato, ContatoCategoria } from '@prisma/client';
import { ContactsUseCase } from 'src/application/usecases/ContactsUseCase';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsUseCase: ContactsUseCase) {}

  @Get()
  async findByCategory(): Promise<any> {
    try {
      return await this.contactsUseCase.execute();
    } catch (error) {
      return error;
    }
  }
}
