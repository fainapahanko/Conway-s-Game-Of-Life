
class GameOfLife {

    constructor() {

        // defining size for one cell
        this.cell_size = 5; 
        // color for dead cells (the same as main project color)
        this.dead_color = `#181818`; 
        // color for alive cells
        this.alive_color = `#FF756B`; 
        // simple math for counting how many rows do we need
        this.cells_in_column = Math.floor(canvas.width / this.cell_size); 
        // same for columns
        this.cells_in_rows = Math.floor(canvas.height / this.cell_size);  
        // 2d array that holds state of current life cycle
        this.active_array = []; 
        // 2d array that holds state of previous life cycle
        this.inactive_array = []; 

        this.arrayInitialization = () => {
            // creating 2 2d arrays with zeroes
        };

        this.arrayRandomize = () => {
            // randomly filling active array with ones and zeroes
        };

        this.fillArray = () => {
            // filling array with color based on its state (1 - active, 0 - inactive)
        };

        this.countNeighbours = (row, col) => {
            // counting neighbours for one cell
        };

        this.updateCellValue = (row, col) => {
            // updating cell value based on sum of its neighbours and returning 0 or 1 accordingly
        };

        this.updateLifeCycle = () => {
            // setting new cell value to inactive array
        };

        this.gameSetUp = () => {
            // initialization of array
        };

        this.runGame = () => {
            // "looping" game
        };
        
    }
}
