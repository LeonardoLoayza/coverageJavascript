function bubbleSort(arr) {
    const resultado = [...arr];

    for (let i = 0; i < resultado.length - 1; i++) {
        for (let j = 0; j < resultado.length - 1 - i; j++) {
            if (resultado[j] > resultado[j + 1]) {
                const temp = resultado[j];
                resultado[j] = resultado[j + 1];
                resultado[j + 1] = temp;
            }
        }
    }

    return resultado;
}

module.exports = bubbleSort;
