export abstract class ContatoByCategoryModel {
  id: number;
  idContato: number;
  idCategoria: number;
  contanto: Contanto;
}

export abstract class Contanto {
  id: number;
  nome: string;
  numero: string;
  categorias: string;
}
