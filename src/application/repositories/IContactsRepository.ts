import { Contanto, ContatoByCategoryModel } from 'src/domain/models/Contact';

export abstract class IContactsRepository {
  abstract getContactsByCategory(
    id: string,
  ): Promise<(ContatoByCategoryModel & { contanto: Contanto })[]>;
  abstract findAll(): Promise<Contanto[]>;
  abstract refreshContacts(): Promise<void>;
}
