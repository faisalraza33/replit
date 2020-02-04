grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

console.log(findisland(grid));

grid = [
    ["1", "0", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
    ["0", "0", "0", "0", "1"]
];

console.log(findisland(grid));

function findisland(grid) {
    //  check if grid is empty then return 0
    let totalIslands = 0;
    if (!grid) {
        return totalIslands;
    }

    // declare variable to navigate in all directions
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]; // right, down, left, up
    const rows = grid.length;
    const cols = grid[0].length;

    // Start from 0,0 and find the land and treat that as a parent node and triger DFS to find the adjacent land to count the islands
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === "1") { // found the land increment the count and find all adjacent lands and mark them visited
                totalIslands++;
                dfsFindLand(row, col, grid);
            }
        }
    }
    return totalIslands;

    // DFS function to count the islands
    function dfsFindLand(row, col, grid) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== "1") {
            return;
        }

        // Mark the land as visited
        grid[row][col] = "*"

        // Search the land in all adjacent cell
        directions.forEach(dir => {
            dfsFindLand(row + dir[0], col + dir[1], grid);
        });
    };
}