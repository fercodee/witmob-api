import { IContactsRepository } from 'src/application/repositories/IContactsRepository';
import { Contact } from 'src/domain/entities/Contact';
import { PrismaService } from 'src/infra/prisma.service';

export class ContatosRepository implements IContactsRepository {
  constructor(private prisma: PrismaService) {}

  getContactsByCategories(): Promise<Contact[]> {
    throw new Error('Method not implemented.');
  }
}
