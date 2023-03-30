import { Injectable } from '@nestjs/common';
import { IContactsRepository } from '../repositories/IContactsRepository';

@Injectable()
export class ContactsUseCase {
  constructor(private contactRepository: IContactsRepository) {}

  async execute(id: string) {
    const contacts = await this.contactRepository.getContactsByCategory(id);
    // const contacts = await this.contactRepository.findAll();
    return contacts;
  }
}
