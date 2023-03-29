import { Contato, ContatoCategoria } from '@prisma/client';

export abstract class IContactsRepository {
  abstract getContactsByCategory(
    id: string,
  ): Promise<(ContatoCategoria & { contanto: Contato })[]>;
  abstract findAll(): any;
}
