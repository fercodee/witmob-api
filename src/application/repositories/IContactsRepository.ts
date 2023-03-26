import { Contact } from 'src/domain/entities/Contact';

export abstract class IContactsRepository {
  abstract getContactsByCategories(): Promise<Contact[]>;
}
