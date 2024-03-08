function sumMultiples() {
    let x = 3;
    let z = 5;
    let somax = 0;
    let somaz = 0;
    let res;

    for (let i = 1; i < 1000; i++) {
        if (i % x === 0) {
            somax += i;
        }
    }

    for (let i = 1; i < 1000; i++) {
        if (i % z === 0) {
            somaz += i;
        }
    }

    res = somax + somaz;
    console.log("A soma dos multiplos de 3 e 5 abaixo de 1000, é: " + res);
}

sumMultiples();

