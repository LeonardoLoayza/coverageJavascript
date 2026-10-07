const bubbleSort = require("../src/bubbleSort");

describe("Bubble Sort", () => {

    test("ordena un arreglo desordenado", () => {
        expect(bubbleSort([5, 3, 8, 1, 2]))
            .toEqual([1, 2, 3, 5, 8]);
    });

    test("ordena un arreglo ya ordenado", () => {
        expect(bubbleSort([1, 2, 3, 4, 5]))
            .toEqual([1, 2, 3, 4, 5]);
    });

    test("ordena un arreglo en orden inverso", () => {
        expect(bubbleSort([5, 4, 3, 2, 1]))
            .toEqual([1, 2, 3, 4, 5]);
    });

    test("funciona con un solo elemento", () => {
        expect(bubbleSort([7]))
            .toEqual([7]);
    });

    test("funciona con un arreglo vacío", () => {
        expect(bubbleSort([]))
            .toEqual([]);
    });

    test("funciona con elementos repetidos", () => {
        expect(bubbleSort([4, 2, 4, 1, 2]))
            .toEqual([1, 2, 2, 4, 4]);
    });

    test("no modifica el arreglo original", () => {
        const original = [3, 1, 2];

        bubbleSort(original);

        expect(original).toEqual([3, 1, 2]);
    });
});
