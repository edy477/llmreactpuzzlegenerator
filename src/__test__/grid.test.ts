import { describe, it, assert,expect  } from 'vitest';
import {Worldsearchgenerator} from "@/features/puzzlegenerators/worldsearchgenerator";


describe('WorldSearchGenerator() Test', () => {

    it("it should crate and instance of WorldSearchGenerator()",function(){
        const wfinder =  new Worldsearchgenerator()
        expect(wfinder).toBeInstanceOf(Worldsearchgenerator)

    })

    it("it should return a grid", function () {
        const wfinder =  new Worldsearchgenerator()
        wfinder.clear_grid();


    })

})