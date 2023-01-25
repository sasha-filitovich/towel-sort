// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    const newArr = matrix.map((item, ind) =>
        ind % 2 === 0 ? item : item.reverse()
    );
    return [].concat(...newArr);
};
