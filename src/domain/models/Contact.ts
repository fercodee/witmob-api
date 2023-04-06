export abstract class ContatoByCategoryModel {
  id: number;
  idContato: number;
  idCategoria: number;
  contanto: ContatoModel;
}

export abstract class ContatoModel {
  id: number;
  nome: string;
  numero: string;
  categorias: string;
}
