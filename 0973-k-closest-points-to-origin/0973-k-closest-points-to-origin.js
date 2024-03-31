/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    const result = [];
    const distanceList = points.map((point, index) => ({
        index: index,
        distance: Math.sqrt((Math.pow(point[0], 2) + Math.pow(point[1], 2))),
    }));
    
    distanceList.sort((a, b) => {
        return a.distance - b.distance;
    });
    
    for (let i = 0; i < k; i++) {
        result.push(points[distanceList[i].index]);
    }
    
    return result;
};