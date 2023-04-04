import { Injectable } from '@nestjs/common';
import { IContactsRepository } from '../repositories/IContactsRepository';

@Injectable()
export class ContactsUseCase {
  constructor(private repository: IContactsRepository) {}

  async execute(id: string) {
    const contacts = await this.repository.getContactsByCategory(id);
    return contacts;
  }
}
