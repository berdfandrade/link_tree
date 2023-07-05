import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Grid,
  Heading,
  Icon,
} from "@chakra-ui/react";

import { useEffect, useRef } from "react";
import AstroCard from "./astroCard";
import anime from "animejs";
import GridHabilidades from "./GridHabilidades";
import * as TB from "react-icons/tb";
import * as GI from "react-icons/gi";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { LuStars } from "react-icons/lu";

function Main() {
  const gridRef = useRef(null);

  useEffect(() => {
    const gridElement = gridRef.current;

    const animateGrid = () => {
      anime({
        targets: gridElement.querySelectorAll(".grid-item"),
        translateX: [-500, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: "easeOutExpo",
        duration: 1000,
      });
    };

    animateGrid();
  }, []);

  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="b" fontSize={20} flex="1" textAlign="left">
                <Icon as={GI.GiNotebook} mr={2}></Icon>História
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6} maxW={"90%"}>
            <Text as="b">Bernardo</Text> é um programador de 27 anos. <br />
            <br />É formado em Cinema e Audiovisual. Gosta de artes, de coisas
            inteligentes, de comédia, de joguitos, de criar coisas, de
            programar, de ler, de jogar Guitar Hero, de correr, de música, de
            ouvir as pessoas, de anime, de futebol, de beber e pô, é isso.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="b" fontSize={20} flex="1" textAlign="left">
                <Icon as={GI.GiSkills} mr={2}></Icon>Habilidades
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {/* Habilidades > GRID */}
            <GridHabilidades />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="b" fontSize={20} flex="1" textAlign="left">
                <Icon as={GI.GiStarsStack} boxSize={5} mr={2}></Icon>Tipo
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={20} mb={2}>
              Bernardo é do tipo <Text as="b">Capricórnio</Text>
            </Text>
            <Text fontSize={15} mb={4}>
              Tipos complemetares:
            </Text>
            <Grid
              maxWidth="100%"
              templateColumns="repeat(3, 1fr)"
              gap={5}
              autoRows="minmax(150px, auto)"
              ref={gridRef}
            >
              <AstroCard
                cor={"orange"}
                planeta={BsSunFill}
                nome={"Capricórnio"}
                icone={TB.TbZodiacCapricorn}
                descricao={
                  "Nascido com o sol em Capricórnio, Bernardo é conhecido por sua determinação inabalável e ambição incansável. Ele é um estrategista habilidoso, sempre avaliando cuidadosamente suas opções antes de agir. Sua natureza prática e pragmática faz com que ele seja um líder confiável e eficiente."
                }
              />
              <AstroCard
                cor={"red"}
                planeta={BsMoonStars}
                nome={"Escorpião"}
                icone={TB.TbZodiacScorpio}
                descricao={
                  "Sua natureza prática e pragmática é complementada pela influência da lua em Escorpião, que traz uma aura misteriosa e magnética a Bernardo. Ele possui uma profundidade emocional significativa e uma capacidade aguçada de perceber as motivações e intenções das pessoas ao seu redor."
                }
              />
              <AstroCard
                cor={"blue"}
                planeta={LuStars}
                nome={<Text ml={4}>Peixes</Text>}
                icone={TB.TbZodiacPisces}
                descricao={
                  "Com o ascendente em Peixes, Bernardo tem uma sensibilidade aguçada e uma conexão profunda com o mundo ao seu redor. Ele é um ser empático, capaz de compreender e compartilhar as emoções dos outros. Sua abordagem suave e pacífica faz com que ele seja um aliado confiável e um defensor dos mais fracos."
                }
              />
            </Grid>
            <Heading mt={6}>Sobre</Heading>
            <Text>
              Nascido com o sol em Capricórnio, a lua em Escorpião e o
              ascendente em Peixes, Bernardo é um personagem de RPG marcado por
              uma combinação única de características. Sua personalidade é uma
              mescla de determinação, intensidade emocional e uma natureza
              sonhadora e compassiva.
              <br />
              <br />
              Com o ascendente em Peixes, Bernardo tem uma sensibilidade aguçada
              e uma conexão profunda com o mundo ao seu redor. Ele é um ser
              empático, capaz de compreender e compartilhar as emoções dos
              outros.
              <br />
              <br />
              Sua abordagem suave e pacífica faz com que ele seja um aliado
              confiável e um defensor dos mais fracos. Apesar de sua
              determinação inabalável, Bernardo também possui uma imaginação
              fértil e uma tendência a se perder em devaneios e fantasias.{" "}
              <br />
              <br />
              Essa combinação de força de vontade e sensibilidade o torna capaz
              de encontrar soluções únicas e criativas para os desafios que
              enfrenta. <br />
              <br />
              No campo de batalha, Bernardo é um estrategista flexível, capaz de
              adaptar-se rapidamente às situações em constante mudança. Ele
              combina sua determinação com uma abordagem tática única, muitas
              vezes surpreendendo seus adversários com sua capacidade de pensar
              fora da caixa.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="b" fontSize={20} flex="1" textAlign="left">
                <Icon as={GI.GiSwordman} mr={2}></Icon>Classe
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Heading mt={4} mb={3}>
              Proleátario - Programador
            </Heading>
            <Grid
              mb={5}
              maxWidth="100%"
              templateColumns="repeat(2, 1fr)"
              gap={2}
              autoRows="minmax(150px, auto)"
              ref={gridRef}
            >
              <AstroCard
                nome={"Proletário"}
                icone={GI.GiHammerSickle}
                cor={"red"}
                planeta={GI.GiSwordSmithing}
                descricao={
                  "Os proletários são a classe trabalhadora, compostos por operários, camponeses, artesãos e outros trabalhadores explorados pelo sistema. Eles enfrentam a dura realidade da luta de classes em um mundo dominado pela burguesia."
                }
              />
              <AstroCard
                nome={"Programador"}
                icone={GI.GiKeyboard}
                cor={"blue"}
                planeta={GI.GiBrainstorm}
                descricao={
                  "Os programadores são mestres das linguagens de programação e das artes do desenvolvimento de software. Com habilidades técnicas excepcionais e uma mente analítica, eles são capazes de moldar a realidade digital à sua vontade."
                }
              />
            </Grid>
            <Text>
              Os proletários-programadores são uma subclasse especializada da
              classe trabalhadora, envolvida na criação e manutenção de software
              e sistemas de computador. Eles enfrentam as complexidades do mundo
              digital enquanto lutam contra as desigualdades presentes na
              indústria tecnológica.
              <br /> <br />
              <Text as={"b"}>Habilidades Especiais:</Text>
              <br /> <br />
              <Text as={"b"}>Habilidade de Codificação:</Text> Os
              proletários-programadores possuem habilidades avançadas de
              codificação. Eles são especialistas em diferentes linguagens de
              programação e podem criar soluções inovadoras para resolver
              problemas complexos. <br />
              <br />
              <Text as={"b"}>Consciência Tecnológica:</Text> Os
              proletários-programadores estão cientes das desigualdades digitais
              e das questões éticas relacionadas à tecnologia. Eles são menos
              suscetíveis a manipulações e têm uma compreensão crítica dos
              sistemas digitais.
              <br />
              <br /> <Text as={"b"}>Colaboração Online:</Text> Os
              proletários-programadores dominam as ferramentas de colaboração
              online. Eles podem se unir virtualmente, compartilhar
              conhecimentos e se organizar para enfrentar desafios técnicos e
              questões de trabalho. <br />
              <br />
              <Text as={"b"}>Adaptação às Mudanças:</Text> Devido à rápida
              evolução do campo da programação, os proletários-programadores são
              altamente adaptáveis. Eles podem aprender novas tecnologias e se
              ajustar rapidamente a diferentes ambientes de desenvolvimento.
              <br />
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="b" fontSize={20} flex="1" textAlign="left">
                <Icon as={GI.GiSatelliteCommunication} mr={2}></Icon>Comunicação
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text>
                <Text mb={5} fontSize={"20"} fontWeight="bold">
                  Comunicação do Personagem:
                </Text>{" "}
                <Text mb={6} fontSize={"xl"} fontWeight="bold">
                  {" "}
                  Português Fluente
                </Text>{" "}
                <Text>
                  Sua língua materna, o português, é sua habilidade mais forte.
                  Bernardo pode se expressar de forma clara e articulada,
                  transmitindo suas ideias e compreendendo efetivamente as
                  informações recebidas.
                </Text>
              </Text>
              <Text mb={6} mt={5} fontSize={"xl"} fontWeight="bold">
                Inglês Fluente
              </Text>{" "}
              <Text>
                Bernardo possui fluência no inglês. Ele pode comunicar-se
                proficientemente, tanto na fala quanto na escrita, com falantes
                nativos de inglês. Isso o torna capaz de interagir com pessoas
                de diferentes origens e se aventurar em terras estrangeiras.
              </Text>
              <Text mb={6} mt={5} fontSize={"xl"} fontWeight="bold">
                Espanhol Mediano
              </Text>{" "}
              <Text>
                Bernardo também tem conhecimentos intermediários em espanhol.
                Embora possa não ser tão fluente quanto em suas línguas
                principais, ele consegue manter conversas básicas, compreender
                instruções e se comunicar de maneira eficaz em situações
                cotidianas.
              </Text>
              <Text mb={6} mt={5} fontSize={"xl"} fontWeight="bold">
                Francês Mediano
              </Text>{" "}
              <Text>
                Bernardo possui conhecimentos intermediários em francês. Ele
                pode participar de diálogos simples, fazer perguntas e entender
                as respostas em um nível básico. Embora não seja fluente, suas
                habilidades linguísticas no francês podem ser úteis em algumas
                regiões e interações específicas.
              </Text>
              <Text>
                <Text mb={6} mt={5} fontSize={"xl"} fontWeight="bold">
                  Fraquezas:
                </Text>{" "}
                <Text as="span">
                  <Text mb={6} as="span" fontWeight="bold">
                    Limitações Linguísticas:
                  </Text>{" "}
                  Embora Bernardo seja um poliglota habilidoso, ele pode
                  enfrentar desafios ao se comunicar em idiomas além dos que
                  domina. Línguas mais obscuras ou dialetos locais podem
                  representar barreiras de comunicação adicionais.
                </Text>
              </Text>
              <Text mt={5}>
                <Text mb={6} as="span" fontWeight="bold">
                  Interpretação Contextual:
                </Text>{" "}
                A fluência e o nível intermediário de Bernardo em diferentes
                idiomas podem exigir que ele faça interpretações contextuais
                para uma comunicação mais eficaz. Certas nuances culturais e
                expressões idiomáticas podem ser difíceis de traduzir ou
                entender completamente.
              </Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Main;
