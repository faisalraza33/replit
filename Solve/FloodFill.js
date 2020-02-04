/*
An image is represented by a 2 - D array of integers, each integer representing the pixel value of the image(from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/



image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
]
sr = 1, sc = 1, newColor = 2

image = [
    [0, 0, 0],
    [0, 1, 1]
]
sr = 1
sc = 1
newColor = 1

console.log(FloodFill(image, sr, sc, newColor)); //Output: [[2,2,2],[2,2,0],[2,0,1]]

function FloodFill(image, sr, sc, newColor) {
    // Check if the sr and sc are valid
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) {
        return image;
    }

    // get the starting color to replace
    const colorToReplace = image[sr][sc];

    // declare variable to for directions
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ] // right, down, left, up

    // Treat the current row and column as root node and trigger depth first search to all adjacent cell with same color to replace with new one
    dfs(sr, sc, image);
    return image;

    // dfs function to fill with new color
    function dfs(row, col, image) {
        if (row < 0 || col < 0 || row >= image.length || col >= image[0].length || image[row][col] === newColor || image[row][col] !== colorToReplace) {
            return;
        }

        image[row][col] = newColor;
        directions.forEach(direction => {
            dfs(row + direction[0], col + direction[1], image);
        })
    }
}