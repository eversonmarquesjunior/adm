import { Adm } from '../adm/adm';

export class Aviso{
    titulo : string;
    mensagem : string;
    telefone : string;
    adm : Adm = new Adm();
    tipo : string;
    key : any;
}
