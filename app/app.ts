import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
// outra forma de lidar com null é fazer a verificacao
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error('Verifique se o formulário existe.')
}
