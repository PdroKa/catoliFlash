import { perguntas } from "./perguntas";

const proxima = document.getElementById("proxima");
const revelar = document.getElementById("revelar");

revelar.onclick = function revelarResposta() {
  var resposta = document.querySelector("#resposta");
  //Lista de classes na variavel respost // Toggle: Alternar On e Off
  resposta.classList.toggle("blur");
};

proxima.onclick = () => {
  buscarInformacao();
};

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  //innerHTML vai sobreescrever o codigo "" esta vazio
  pergunta.innerHTML = "";
  //createElement Cria um elemento
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "animate__animated", "animate__bounce");

  // `` Cria um template (modelo)
  cardDiv.innerHTML = `
<div class="card_pergunta centralizar">
            <h1 class="card_titulo">${proximaPergunta.title}</h1>
          </div>
          <!--Card de resposta-->
          <div id="resposta" class="card_resposta blur">
            <p>${proximaPergunta.description}</p>
          </div>
`;
  //apend = anexar
  pergunta.appendChild(cardDiv);
}

function buscarInformacao() {
  // responsavel por requicitar informacao a um servidor
  let numeroAleatorio = Math.floor(Math.random() * perguntas.length);
  let perguntasAleatorias = perguntas[numeroAleatorio];
  proximaPergunta(perguntasAleatorias);
}

buscarInformacao();
// !!! Assim que a pagina for carregada Chamara o função !!! n necessario agora
//window.addEventListener("load, buscarInformacao");
