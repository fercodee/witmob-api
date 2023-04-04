import { IContactsRepository } from '../repositories/IContactsRepository';

export class ContactRefreshUseCase {
  constructor(private repository: IContactsRepository) {}

  async excute() {
    return await this.repository.refreshContacts();
  }
}
