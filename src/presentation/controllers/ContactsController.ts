import { Controller, Get, Query } from '@nestjs/common';
import { get } from 'http';
import { ClienteRefreshUseCase } from 'src/application/usecases/ClientesRefreshUseCase';
import { ClienteUseCase } from 'src/application/usecases/ClientesUseCase';
import { DropDBUseCase } from 'src/application/usecases/DropDBUseCase';
import {
  ClienteModel,
  ClienteBySegmentoModel,
} from 'src/domain/models/Cliente';

@Controller('clients')
export class ContactsController {
  constructor(
    private clientUsecase: ClienteUseCase,
    private refreshDBUseCase: ClienteRefreshUseCase,
    private dropDBUseCase: DropDBUseCase
  ) {}

  @Get()
  async findByCategory(
    @Query('segmento_id') id: string,
  ): Promise<(ClienteBySegmentoModel & { cliente: ClienteModel })[]> {
    try {
      return await this.clientUsecase.execute(id);
    } catch (error) {
      return error;
    }
  }

  @Get('refresh')
  async regreshDB(): Promise<void> {
    try {
      await this.refreshDBUseCase.excute();
    } catch (error) {
      return error;
    }
  }

  @Get('drop')
  async deleteDB(): Promise<void> {
    try {
      await this.dropDBUseCase.execute();
    } catch (error) {
      return error;
    }
  }
  
}
