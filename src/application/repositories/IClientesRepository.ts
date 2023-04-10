import {
  ClienteModel,
  ClienteBySegmentoModel,
} from 'src/domain/models/Cliente';

export abstract class IClientsRepository {
  abstract getContactsByCategory(
    id: string,
  ): Promise<(ClienteBySegmentoModel & { cliente: ClienteModel })[]>;
  abstract refreshContacts(): Promise<void>;
}
