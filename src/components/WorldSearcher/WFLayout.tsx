import {Box, Card, Stack, TextField, FormControl, InputLabel, MenuItem, Select, Container, Grid} from "@mui/material";
import WGrid from "@/components/WorldSearcher/WGrid";
import {useAppSelector, useAppDispatch} from "@/store/hooks";
import {useEffect} from "react";
import {GridGame} from '@/store/gridslice';

const WFLayout  = () => {

    const dispatch = useAppDispatch();
    //const grid = useAppSelector((state) => state.gridgame.grid);

    useEffect(() => {
       // const gridGame = new GridGame();
        


    })



    return(
        <Box>
            <Container maxWidth="sm">
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=''
                    label="Age"

                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </Container>
            <Stack direction="row" spacing={2}>
                <Card>
                <TextField fullWidth   label="fullWidth" id="fullWidth"   ></TextField>
                </Card>
                <Card>
                <WGrid/>
                </Card>
            </Stack>


        </Box>
    )
}

export default WFLayout;
