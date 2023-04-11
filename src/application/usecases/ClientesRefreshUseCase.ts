import { Injectable } from '@nestjs/common';
import { IClientsRepository } from '../repositories/IClientesRepository';

@Injectable()
export class ClienteRefreshUseCase {
  constructor(private repository: IClientsRepository) {}

  async excute() {
    return await this.repository.refreshClients();
  }
}
