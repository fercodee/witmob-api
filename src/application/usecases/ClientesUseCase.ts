import { Injectable } from '@nestjs/common';
import { IClientsRepository } from '../repositories/IClientesRepository';

@Injectable()
export class ClienteUseCase {
  constructor(private repository: IClientsRepository) {}

  async execute(id: string) {
    const contacts = await this.repository.getContactsByCategory(id);
    return contacts;
  }
}
