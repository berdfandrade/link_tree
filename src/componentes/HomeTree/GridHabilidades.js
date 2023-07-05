import * as GI from "react-icons/gi";
import * as BI from "react-icons/bi";

import {
  Grid,
  Flex,
  Box,
  Progress,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react";

import anime from "animejs";

function IconHabilidade({ icone, nome, progresso, descricao, cor }) {
  return (
    <Flex flexDirection="column">
      <Center flexDirection={"column"}>
        <Icon color={cor ? cor : null} boxSize={"50px"} as={icone} />
        <Text mb={1} justifyContent={"center"}>
          {nome}
        </Text>

        <Progress
          size={"sm"}
          w="90px"
          borderRadius={"full"}
          value={progresso ? progresso : 20}
          colorScheme={
            progresso <= 20 ? "red" : progresso <= 40 ? "orange" : "blue"
          }
        />
        <Text mt={2} maxW={"90%"} fontSize={"xs"}>
          {descricao}
        </Text>
      </Center>
    </Flex>
  );
}

function GridHabilidades() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        maxWidth="90%"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        autoRows="minmax(120px, auto)"
      >
        <IconHabilidade
          nome={"Intelecto"}
          descricao={"Habilidade para falar coisas inteligentes"}
          icone={GI.GiBrain}
          progresso={70}
        />
        <IconHabilidade
          nome={"Amor"}
          icone={GI.GiHeartBattery}
          progresso={5}
          descricao={"Habilidades amorosas"}
        />
        <IconHabilidade
          nome={"Social"}
          icone={GI.GiTalk}
          progresso={50}
          descricao={"Habilidades sociais"}
        />
        <IconHabilidade
          nome={"Bateria"}
          descricao={"Habilidade para tocar a batera."}
          icone={GI.GiDrumKit}
          progresso={89}
        />
        <IconHabilidade
          nome={"Festas"}
          descricao={"Proporcionar o entretenimento!"}
          icone={GI.GiPartyHat}
          progresso={70}
        />
        <IconHabilidade
          nome={"Corrida"}
          icone={GI.GiRunningShoe}
          progresso={40}
          descricao={"Capacidade de correr"}
        />

        <IconHabilidade
          nome={"Criatividade"}
          icone={GI.GiFluffyCloud}
          progresso={100}
          descricao={"Habilidades criativas"}
        />
        <IconHabilidade
          nome={"Esforço"}
          icone={GI.GiMuscleUp}
          progresso={80}
          descricao={"Capacidade de exercer esforço para algo"}
        />
        <IconHabilidade
          nome={"Físico"}
          icone={GI.GiMuscularTorso}
          progresso={60}
          descricao={"Aptidões físicas"}
        />
        <IconHabilidade
          nome={"Memória"}
          icone={BI.BiMemoryCard}
          progresso={50}
          descricao={"Capacidade de lembrar das coisas"}
        />
        <IconHabilidade
          nome={"Lógica"}
          icone={GI.GiAbacus}
          progresso={20}
          descricao={"Capacidade lógica"}
        />
        <IconHabilidade
          nome={"Programação"}
          icone={GI.GiComputing}
          progresso={42}
          descricao={"Capacidade para programar"}
        />
        <IconHabilidade
          nome={"Estética"}
          icone={GI.GiEyeTarget}
          progresso={60}
          descricao={"Apuração de senso estético"}
        />
        <IconHabilidade
          nome={"Humor"}
          icone={GI.GiChicken}
          progresso={90}
          descricao={"Senso de humor"}
        />
        <IconHabilidade
          nome={"Filmes"}
          icone={GI.GiFilmProjector}
          progresso={70}
          descricao={"Conhecimento sobre cinema"}
        />
        <IconHabilidade
          nome={"Animes"}
          icone={GI.GiNinjaHeroicStance}
          progresso={70}
          descricao={"Conhecimento sobre animes"}
        />
        <IconHabilidade
          nome={"Música"}
          icone={GI.GiMusicalNotes}
          progresso={70}
          descricao={"Conhecimento sobre música"}
        />
                <IconHabilidade
          nome={"Juegos"}
          icone={GI.GiConsoleController}
          progresso={96}
          descricao={"Conhecimento sobre joguitos"}
        />
      </Grid>
    </Flex>
  );
}

export default GridHabilidades;
