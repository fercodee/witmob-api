import { IContactsRepository } from '../repositories/IContactsRepository';

export class ContactsUseCase {
  constructor(private contactRepository: IContactsRepository) {}

  async execute() {
    const contacts = await this.contactRepository.getContactsByCategories();
    return contacts;
  }
}
