import {
  ContatoModel,
  ContatoByCategoryModel,
} from 'src/domain/models/Contact';

export abstract class IContactsRepository {
  abstract getContactsByCategory(
    id: string,
  ): Promise<(ContatoByCategoryModel & { contanto: ContatoModel })[]>;
  abstract findAll(): Promise<ContatoModel[]>;
  abstract refreshContacts(): Promise<void>;
}
