import React, { useEffect, useState } from 'react';

const TerminalComponent = () => {
  const [fraseAtual, setFraseAtual] = useState('');
  const frases = [
    // Frases de Breaking Bad
    "I'm the one who knocks.",
    "Say my name.",
    "I am the danger.",
    "I did it for me.",
    "Yeah, science!",
    "I'm in the empire business.",
    "Tread lightly.",
    "No more half-measures.",
    "Yeah, bitch! Magnets!",
    "I'm not in danger, Skyler. I am the danger.",

    // Frases de Naruto
    "Acredite!",
    "Eu nunca volto atrás na minha palavra. Esse é o meu caminho ninja!",
    "Um verdadeiro herói não é medido pelo tamanho de sua força, mas pela força de seu coração.",
    "Quando um homem aprende a amar, ele deve suportar o risco do ódio.",
    "Eu não vou mais fugir... Eu não vou mais voltar atrás na minha palavra... esse é o meu jeito ninja!",
    "Dattebayo!",
    "O trabalho árduo não vale nada para aqueles que não acreditam em si mesmos.",
    "Eu quero ficar com você. De agora em diante, quero passar todos e cada um dos meus dias até morrer com você, e somente você.",
    "A diferença entre a estupidez e o gênio é que o gênio tem seus limites.",
    "Aqueles que quebram as regras são lixo, mas aqueles que abandonam seus amigos são piores do que lixo."
  ];

  useEffect(() => {
    const intervaloDigitacao = 50; // Intervalo de tempo entre cada letra (em milissegundos)
    const intervaloFrase = 3000; // Intervalo de tempo entre cada frase (em milissegundos)
    let fraseIndex = 0;
    let letraIndex = 0;
    let timeoutId;

    const escreverLetra = () => {
      setFraseAtual(prevFrase => prevFrase + frases[fraseIndex].charAt(letraIndex));

      if (letraIndex < frases[fraseIndex].length - 1) {
        letraIndex++;
        timeoutId = setTimeout(escreverLetra, intervaloDigitacao);
      } else {
        // Aguarda um tempo antes de apagar a frase
        setTimeout(apagarFrase, 2000);
      }
    };

    const apagarFrase = () => {
      if (fraseAtual === frases[fraseIndex]) {
        if (fraseIndex === frases.length - 1) {
          fraseIndex = 0;
        } else {
          fraseIndex++;
        }
        letraIndex = 0;

        // Aguarda um tempo antes de escrever a próxima frase
        setTimeout(escreverLetra, intervaloFrase);
      } else {
        setFraseAtual(prevFrase => prevFrase.slice(0, -1));
        timeoutId = setTimeout(apagarFrase, intervaloDigitacao);
      }
    };

    // Inicia a primeira escrita
    timeoutId = setTimeout(escreverLetra, 1000);

    // Limpa o timeout quando o componente é desmontado
    return () => {
      clearTimeout(timeoutId);
      escreverLetra()
    };
  }, []);

  return (
    <div className="terminal-component">
      <span></span>
      <span>{fraseAtual}</span>
    </div>
  );
};

export default TerminalComponent;
