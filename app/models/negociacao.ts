export class Negociacao {

  // td mundo tem acesso, mas ngm pode atribuir valor
  constructor (
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  // programacao defensiva
  // impede que o valor seja reatribuido
  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  // public static: se torna um metodo da classe, fica disponivel em qualquer lugar com acesso a classe, sem precisar instanciar
  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    // pega todos os -
    const exp = /-/g;
    // cria uma data vindo do input substituindo - por ,
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}