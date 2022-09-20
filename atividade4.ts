class funcionario{
    nome: string;
    sobrenome: string
    idade: number
    empresa: string
    função: string

    mostrarInformacoes(){
        console.log(`funcionario: ${this.nome} ${this.sobrenome}\n idade: ${this.idade}\n empresa: ${this.empresa}\n função: ${this.função}\n `)

     }
   
}

const func = new funcionario();
func.nome = "Taiana"
func.sobrenome = "Januario"
func.idade = 29
func.empresa = "Portfood"
func.função = "Atendente"

func.mostrarInformacoes();
