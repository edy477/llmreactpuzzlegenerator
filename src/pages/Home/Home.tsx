import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import {Worldsearchgenerator} from "@/features/puzzlegenerators/worldsearchgenerator";
import WFLayout from "@/components/WorldSearcher/WFLayout";

const Home = () => {
    const word_list:  Array<string> = ['pitch','pumpernickel', 'leaven'];
    const wordSearchGen = new Worldsearchgenerator(20,20,word_list);
    wordSearchGen.clear_grid();
    wordSearchGen.place_words();
    wordSearchGen.get_gridrep();

  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Vite-MUI-TS Template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
        </Typography>
      </Stack>

   <WFLayout/>
    </Container>
  );
};

export default Home;
