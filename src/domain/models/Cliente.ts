export abstract class ClienteBySegmentoModel {
  id: number;
  idCliente: number;
  idSegmento: number;
  cliente: ClienteModel;
}

export abstract class ClienteModel {
  id: number;
  cliente: string;
  telefone: string;
  segmento: string;
}
