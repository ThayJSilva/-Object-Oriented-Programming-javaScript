class eletronico{
    nome: string;
    marca: string;
    tensão: number;

    mostrarInformacoes(){

    console.log(`eletronico: ${this.nome} ${this.marca}  ${this.tensão}`)

   }

}
const eletr = new eletronico ();
eletr.nome = "liquidificador"
eletr.marca = "arno"
eletr.tensão = 110

eletr.mostrarInformacoes()

