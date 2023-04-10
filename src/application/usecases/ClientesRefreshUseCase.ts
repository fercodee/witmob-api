import { IClientsRepository } from '../repositories/IClientesRepository';

export class ClienteRefreshUseCase {
  constructor(private repository: IClientsRepository) {}

  async excute() {
    return await this.repository.refreshContacts();
  }
}
