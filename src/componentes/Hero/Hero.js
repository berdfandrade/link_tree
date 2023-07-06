import { React, useRef, useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  Avatar,
  Divider,
  Icon,

  Flex,
  Tag,
  Progress,
} from "@chakra-ui/react";

import * as GI from "react-icons/gi";
import * as FA from "react-icons/fa";
import * as TB from "react-icons/tb";

import calcularPorcentagemCompletadaAno from "./porcentagemAno";
import anime from "animejs";
import TerminalComponent from "./escreverNoTerminal";
import PixelBenny from "../../assets/pixelBennySemFundo.png";
import { ToggleDarkMode } from "../botaoDarkMode/botaoDarkMode";
import aura from "../../assets/de6pp7v-7ec4ca37-05a0-425a-adc3-23c4bea0d1f2.gif";
import aura2 from "../../assets/dc1jmvt-18441e04-12ef-4595-8505-5cc8ade3034e.gif";
import aura3 from "../../assets/deza8e9-b79fc074-2c89-4214-b0cb-73152b904149.gif" // Campeã
import aura5 from "../../assets/df7x0n1-12b200af-d15b-44dd-816a-5c7576b8cde6.gif"
import calcularPorcentagemDiaPassado from "./porcentagemDia";

const Hero = () => {
  const elementRef = useRef(null);

  const [porCentoAno, setPorCentoAno] = useState(0);

  const [HP, setHp] = useState(0)

  useEffect(() =>{
    const HP = 100 - calcularPorcentagemDiaPassado()
    setHp(HP)
  },[])

  useEffect(() => {
    const porcentagemCompletadaAno = calcularPorcentagemCompletadaAno();
    setPorCentoAno(porcentagemCompletadaAno);
  }, []);

  
  useEffect(() => {
    const element = elementRef.current;
    anime({
      targets: element,
      translateY: [-32, -15], // Define a animação de subida e descida
      loop: true, // Faz a animação repetir infinitamente
      direction: "alternate",
      easing: "easeInOutQuad", // Define a curva de aceleração
      duration: 2000,
    });
  }, []);

  return (
    <Box py={8} mb={1} textAlign="center">
      <Heading as="h3" mb={1}>
        Bernardo Andrade
      </Heading>
 <ToggleDarkMode/>
      <Center mb={2}>
        <Box position="relative" width="170px" height="170px">
       
          <Box
            top="20"
            left="10"
            position="absolute"
            width="100%"
            height="100%"
          >
            <img
              src={PixelBenny}
              ref={elementRef}
              alt="Avatar"
              style={{ width: "100px", height: "100px" }}
            />
          </Box>
          <img
            src={aura3}
            alt="Aura Animation"
            style={{ width: "120%", height: "120%" }}
          />
        </Box>
        <Text fontSize="md" mt={4}>
          <Text as="b">stats: </Text> <br />
          {/* <Divider maxW={"120px"} mb={2} /> */}
          <Text ml={1}>
            Lvl.{" "}
            <Text fontSize="30" mr={1} as="b">
              27
            </Text>
            Class:
            <Icon boxSize={"7"} ml={1} as={GI.GiHammerSickle} />
          </Text>
          <Flex flexDirection={"row"}>
          <Text fontSize={"xs"} mr={2}>
              HP.{" "}
            </Text>
            <Progress
              w={"105px"}
              maxW={"200px"}
              borderRadius={"full"}
              height={"8px"}
              colorScheme={HP <= 40 ? "orange" : HP <= 20 ? "red" : "teal"}
              value={HP}
              mb={2}
            ></Progress>
            </Flex>
          <Flex flexDirection={"row"}>
            
            <Text fontSize={"xs"} mr={2}>
              exp.{" "}
            </Text>
            <Progress
              w={"100px"}
              maxW={"200px"}
              borderRadius={"full"}
              height={"8px"}
              value={Math.round(porCentoAno)}
              mb={2}
            ></Progress>
          </Flex>
          <Text fontSize={"xs"}>
            {Math.round(porCentoAno) * 100} / {100 * 100}
          </Text>
          <Text fontSize={"xm"} mb={1}>
            {" "}
            <Icon boxSize={"6"} mb={-1} as={GI.GiPointySword} mr={1} ml={2} />
            500 | <Icon boxSize={"6"} mb={-1} as={GI.GiBoltShield} /> 600
          </Text>
          <Icon boxSize={"4"} as={FA.FaRulerVertical} ml={2} mr={3} />{" "}
          <Text as="b" fontSize={14}>
            1.73m
          </Text>
          <br />
          <Icon boxSize={"4"} as={GI.GiWeightScale} mr={3} />{" "}
          <Text as="b" fontSize={14}>
            74kg
          </Text>
          <br />
          <Tag colorScheme="orange" borderRadius="full" mt={1} ml={3} mr={2}>
            Terra
            <Icon boxSize={"16px"} ml={1} as={TB.TbZodiacCapricorn} />
          </Tag>
          <Tag mt={1} borderRadius="full" colorScheme="blue">
            Água
            <Icon boxSize={"14px"} ml={1} as={TB.TbZodiacPisces} />
          </Tag>
          <br />
        </Text>
      </Center>
    </Box>
  );
};

export default Hero;
