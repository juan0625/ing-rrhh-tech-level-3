// colisiones.js
function contarColisiones(secuencia) {
    const n = secuencia.length;
    const colisiones = new Array(n).fill(0);

    for (let i = 0; i < n - 1; i++) {
        if (secuencia[i] === 'R' && secuencia[i + 1] === 'L') {
            colisiones[i]++;
            colisiones[i + 1]++;
        } else if (secuencia[i] === 'R' && secuencia[i + 1] === 'R') {
            let j = i + 1;
            while (j < n && secuencia[j] === 'R') {
                j++;
            }
            if (j < n && secuencia[j] === 'L') {
                for (let k = i; k <= j; k++) {
                    colisiones[k]++;
                }
                i = j - 1; // Avanza a la posición del último 'R' en la secuencia encontrada
            }
        }
    }

    return colisiones.join(' ');
}

export default contarColisiones;
