import { Controller, Get, Query } from '@nestjs/common';
import { ClienteUseCase } from 'src/application/usecases/ClientesUseCase';
import {
  ClienteModel,
  ClienteBySegmentoModel,
} from 'src/domain/models/Cliente';

@Controller('contacts')
export class ContactsController {
  constructor(private usecase: ClienteUseCase) {}

  @Get()
  async findByCategory(
    @Query('category_id') id: string,
  ): Promise<(ClienteBySegmentoModel & { cliente: ClienteModel })[]> {
    try {
      return await this.usecase.execute(id);
    } catch (error) {
      return error;
    }
  }
}
