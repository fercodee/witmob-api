import { IContactsRepository } from '../repositories/IContactsRepository';

export class ContactRefreshUseCase {
  constructor(private contactsRepository: IContactsRepository) {}

  async excute() {
    return await this.contactsRepository.refreshContacts();
  }
}
