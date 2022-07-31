export abstract class View<T> {

  protected elemento: HTMLElement;
  private escapar = false;

  // ? parametro opcional
  // o primeiro parametro nao pode ser opcional
  // o parametro opcional deve ser o ultimo
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error (`Seletor ${seletor} não existe na DOM`)
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  // força que a classe filha implemente o metodo template
  protected abstract template(model: T): string;

  /* renderiza template no elemento */
  public update(model: T): void {
    let template = this.template(model);
    // se for inserido algum script dentro do template, ele é apagado
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script./, '');
    }
    this.elemento.innerHTML = template;
  }
}