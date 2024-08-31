import contarColisiones from './colisiones.js';
import { expect } from 'chai';

describe('contarColisiones', () => {
    it('debería devolver "0 0" para la entrada "LR"', () => {
        const resultado = contarColisiones('LR');
        expect(resultado).to.equal('0 0');
    });

    it('debería devolver "1 1" para la entrada "RL"', () => {
        const resultado = contarColisiones('RL');
        expect(resultado).to.equal('1 1');
    });

    it('debería devolver "0 0 0" para la entrada "RRR"', () => {
        const resultado = contarColisiones('RRR');
        expect(resultado).to.equal('0 0 0');
    });

    it('debería devolver "0 0 0 0" para la entrada "LLLL"', () => {
        const resultado = contarColisiones('LLLL');
        expect(resultado).to.equal('0 0 0 0');
    });


});


