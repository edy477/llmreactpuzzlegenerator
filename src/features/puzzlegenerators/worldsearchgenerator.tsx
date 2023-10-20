
interface  opts{
    backwards: number;
    letters: string;

}

export class Worldsearchgenerator{
    words: Array<string>;
    cols: number;
    rows: number;
    alphabet:  string;
    grid: Array<Array<string>>;
    maxattempts: number;
    opts: opts;
    constructor(cols = 10,rows =10, words: Array<any> = [], opts : opts = {backwards: 0, letters: ""}) {
        this.maxattempts  = 20;
        this.alphabet =  'abcdefghijklmnopqrstuvwxyz';
        this.cols = cols;
        this.rows = rows;
        this.words = words.sort( (a,b)=>  a.length - b.length);
        this.grid = [];
        this.opts = opts ;
        this.opts.backwards = this.opts.backwards == 0 ? this.opts.backwards : 0.5;
        this.opts.letters = this.alphabet;

    }

    clear_grid(){

        
        for (let i = 0; i < this.rows; i++) {
            const row: string[] = [];
            for (let j = 0; j < this.cols; j++) {
                row.push(""); // Or you can put initial values if needed
            }
            this.grid.push(row);
        }
        
       
    }

    place_words(){

        const unplaced: Array<string> = [];

        for(const word of this.words){
            const originalWord = word;
            const wordc = word;
            let attempts = 0;
            while(attempts < this.maxattempts){
                const direction: number  = Math.floor((Math.random()*4))
                const info = this.directioninfo(word,direction,  this.cols, this.rows)

                if(info.maxX < 0 || info.maxY < 0 || info.maxY < info.minY || info.maxX < info.minX){
                    unplaced.push(originalWord);
                    break;
                }
                let x, ox;
                x = ox = Math.round(Math.random() * (info.maxX - info.minX) + info.minX);
                let y, oy;
                y = oy = Math.round(Math.random() * (info.maxY - info.minY) + info.minY);
                let placeable = true;
                let count = 0;

                for(let  l = 0; l < wordc.length; l++){
                    const charingrid = this.grid[x][y];
                    if(charingrid){
                        if(charingrid !== wordc.charAt(l)){
                            placeable = false;
                            break;

                        }else{
                            count++;
                        }
                    }
                }
                y += info.dy;
                x += info.dx;
                if(!placeable || count >= wordc.length){
                    attempts++;
                    continue;
                }
                x = ox;
                y = oy;
                for(let l  =0; l < wordc.length; l++){

                    this.grid[y][x] = wordc.charAt(l);
                    y += info.dy;
                    x += info.dx;

                }
                break;
                if (attempts >= 20) unplaced.push(originalWord);

            }

        }
        const solved = JSON.parse(JSON.stringify(this.grid));
        for (let i = 0; i < this.grid.length; i++)
            for (let j = 0; j < this.grid[i].length; j++)
                if (!this.grid[i][j]) {
                    solved[i][j] = ' ';
                    this.grid[i][j] = this.opts.letters.charAt(
                        Math.floor(Math.random() * this.opts.letters.length)
                   );
                }
    }
    get_grid(){
                return this.grid;


    }
    get_gridrep(){
        const grid = this.get_grid();
        let line = "";

        for(let i = 0 ; i < this.rows; i++){
            for(let l = 0 ; l < this.rows; l++){

                line += grid[i][l] + " ";


            }
            console.log(line);

            console.log("\n");
            line = "";
        }
    }

    directioninfo(word:string, direction: number, width: number, height: number){
        let minX, minY, maxX, maxY;
        minX = minY = 0;
        maxX = width -1;
        maxY = height -1;
        let dx = 0;
        let dy: number = 0;
    switch (direction){
        case 0: // up-right
            maxY = height - 1;
            minY = word.length - 1;
            dy = -1;
            maxX = width - word.length;
            minX = 0;
            dx = 1;
            break;
        case 1: // right
            maxX = width - word.length;
            minX = 0;
            dx = 1;
            break;
        case 2: // down-right
            minY = 0;
            maxY = height - word.length;
            dy = 1;
            maxX = width - word.length;
            minX = 0;
            dx = 1;
            break;
        case 3: // down
            minY = 0;
            maxY = height - word.length;
            dy = 1;
            break;
        default: /* NOTREACHED */
            break;
    }
    return{maxX,maxY,minX, minY, dx,dy}

    }

}