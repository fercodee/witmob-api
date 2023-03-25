import { Entity } from '../shared/IEntity';

type ContactProps = {
  nome: string;
  contato: number;
  categorias: Array<number>;
};

export class Contact extends Entity<ContactProps> {
  private constructor(props: ContactProps, id?: number) {
    super(props, id);
  }

  static create(props: ContactProps, id?: number) {
    const contact = new Contact(props, id);
    return contact;
  }
}
