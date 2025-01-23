import "react";
import "./assets/globalStyle/global.scss";
import nintendo2 from "./assets/img/nintendo2.png";
import nintendo1 from "./assets/img/nintendo1.png";
import ps5 from "./assets/img/PS5.png";
import ps4 from './assets/img/PS4_Slim.png';
import xbox_one from './assets/img/xbox_One.png';
import xboxserie_S from './assets/img/xbox_serie_x.png';


export default function App() {
  const consoles = [
    {
      nome: "Console Playstation 5 Digital Edition - PS5",
      imagem: ps5,
      descrição:
        "Jogar não Tem Limites. Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para Console PlayStation®5 Digital Edition - PS5.",
      preço: "R$ 3.999,00",
      alt: "Imagem ilustrativa do console PlayStation 5 na cor branca com caixa",
    },

    {
      nome: "Console PlayStation 4 Slim 1TB - PS4",
      imagem:ps4,
     descrição:
        "Explore o PS4 Slim, com seu design elegante na cor preta. Equipado com um disco rígido de 1TB, proporciona espaço mais do que suficiente para armazenar todos os seus jogos favoritos, aplicativos e conteúdo multimídia.Um console clássico da Sony que ainda faz sucesso.",
      preço: "R$ 1.600,00",
      alt: "Imagem ilustrativa do console PlayStation 4 na cor preta com a caixa",
    },

    {
      nome: "Xbox Series X",
      imagem:xboxserie_S,
       descrição:
        "O console mais poderoso da Microsoft, com suporte a 4K e ray tracing.",
      preço: "R$ 4.000,00",
      alt: "Imagem do Xbox Series X",
    },
    {
      nome: "Xbox One",
      imagem: xbox_one,
        descrição: "Um console da Microsoft com uma vasta biblioteca de jogos.",
      preço: "R$ 1.600,00",
      alt: "Imagem do Xbox One",
    },
    {
      nome: "Nintendo Switch",
      imagem: nintendo1,
        descrição:
        "Um console híbrido que pode ser jogado como portátil ou conectado à TV.",
      preço: "R$ 2.500,00",
      alt: "Imagem ilustrativa do Nintendo Switch",
    },
    {
      nome: "Nintendo Switch 2",
      imagem: nintendo2,
      descrição:
        "Um console híbrido que pode ser jogado como portátil ou conectado à TV lançamento de 2025.",
      preço: "R$ 5.500,00",
      alt: "Imagem ilustrativa do Nintendo Switch 2",
    },
  ];


  return (
    <main className="mainp">
      <section className="Logomarca">
        <h1>Consoles de videogames Vai Na web</h1>
      </section>

      <section className="consolelista">
        {consoles.map((console) => (
          <article className="consolecard">
            <h2>{console.nome}</h2>
            <img src={console.imagem} alt={console.alt} className="imagens" />

            <p>{console.descrição}</p>
            <h2>{console.preço}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
