import { Cidade } from "../cidade/cidade.model";

export interface Cliente{
    id?:String,
    cpfOuCnpj:String,
    nome:String,
    endereco:String,
    numero:String,
    bairro:String,
    cep:String,
    telefone:String,
    email:String,
    ativo: boolean,
    cidade: number
}