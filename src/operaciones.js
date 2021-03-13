function operando(options) {
    const val1 = Number(options[0]);
    const val2 = Number(options[1]);
    const operacion = options[2];
    let result = null;

    console.log('entro a operando ', options);
    console.log('V1 ', val1);
    console.log('V2', val2);
    console.log('OPER', operacion);

    switch (operacion) {
        case '+':
            console.log('entro a mas');
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case 'x':
            result = val1 - val2;
            break;
        case '/':
            result = val1 / val2;
            break;
        default:
            result = 0;
            break;
    }
    return result;
}

export default operando;
