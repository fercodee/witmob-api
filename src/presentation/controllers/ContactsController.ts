import { Controller, Get, Query } from '@nestjs/common';
import { ContactsUseCase } from 'src/application/usecases/ContactsUseCase';
import {
  ContatoModel,
  ContatoByCategoryModel,
} from 'src/domain/models/Contact';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsUseCase: ContactsUseCase) {}

  @Get()
  async findByCategory(
    @Query('category_id') id: string,
  ): Promise<(ContatoByCategoryModel & { contanto: ContatoModel })[]> {
    try {
      return await this.contactsUseCase.execute(id);
    } catch (error) {
      return error;
    }
  }
}
