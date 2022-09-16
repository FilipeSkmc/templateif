import { LightningElement } from "lwc";

export default class App extends LightningElement {
    visivel = true; //boolean

    nome = "Filipe Smith?"; //string
    idade = 16; //number
    email = 'f@f.com'; //string
    cpf = "00011122233"; //string
        
    nomePet = "Caramelo";
    raca = "Vira Lata";
    peso = 35;
    idadePet = 3;

    onClick(){
        this.visivel = !this.visivel;
        this.nome = "Anderson";
        this.idade = 19;
    }  
}
