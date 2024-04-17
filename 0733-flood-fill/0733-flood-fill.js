/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc];

    if (oldColor === color) return image;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const rows = image.length;
    const cols = image[0].length;
    const queue = [[sr, sc]];

    while (queue.length > 0) {
        const [currentRow, currentColumn] = queue.shift();

        if (image[currentRow][currentColumn] === oldColor) {
            image[currentRow][currentColumn] = color;

            for (let i = 0; i < directions.length; i++) {
                const deltaRow = directions[i][0];
                const deltaColumn = directions[i][1];
                const newRow = currentRow + deltaRow;
                const newColumn = currentColumn + deltaColumn;

                if (newRow >= 0 &&
                    newRow < rows &&
                    newColumn >= 0 &&
                    newColumn < cols &&
                    image[newRow][newColumn] === oldColor
                ) {
                    queue.push([newRow, newColumn]);
                }
            }
        }
    }

    return image;
};
