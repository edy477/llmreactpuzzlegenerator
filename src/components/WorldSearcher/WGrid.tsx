import {Box, Card, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import {Worldsearchgenerator} from "@/features/puzzlegenerators/worldsearchgenerator";
import {createGrid} from "@/features/grid/grid";

const WGrid  = () => {

    const [wordfinder, setWordFinder] = useState([[]]);


    useEffect(() =>{
        const word_list:  Array<string> = ['pitch','pumpernickel', 'leaven'];
         const wfGen =new Worldsearchgenerator(10,10,word_list);
         const grid = createGrid({size: 10});
         console.log("this grid:"+grid[0]);
         wfGen.clear_grid();
         wfGen.place_words();
         wfGen.get_gridrep();
        const wfgrid = wfGen.get_grid();
        setWordFinder(wfgrid);


    },[])

    console.log(wordfinder)


    return(
        <Box>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableBody>
        {wordfinder.map((item,index) =>(
            <TableRow key={index}>

                { item.map((item , index)=>(
                    <TableCell key={index}>
                        {item}
                    </TableCell>

                ))

                }
            </TableRow>

            )

        )}



    </TableBody>


</Table>


</TableContainer>


        </Box>
    )
}

export default WGrid;
