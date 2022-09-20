class avião{
nome: string;
modelo: string;
ano: number;

mostrarInformacoes(){
    console.log(`Aviao: ${this.nome}\nmodelo: ${this.modelo}\nano: ${this.ano}`)
}

}

const av1 = new avião();
av1.nome = "Airbus"
av1.modelo = "A340-600"
av1.ano = 1993

av1.mostrarInformacoes();
