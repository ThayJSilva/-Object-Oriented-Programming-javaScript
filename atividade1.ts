class cliente{
    
    nome:string;
    sobrenome: string;
    idade: number;
    endereco:string;


    mostrarInformacoes() {
        console.log(`cliente: ${this.nome}  ${this.sobrenome}\nidade ${this.idade}\nendereço ${this.endereco}\n`)
    }


}
const cl1 = new cliente();
cl1.nome = "Emilly"
cl1.sobrenome = "Silva"
cl1.idade = 1 
cl1.endereco = "Rua.Mazzaropi, 10.573"

cl1.mostrarInformacoes();


