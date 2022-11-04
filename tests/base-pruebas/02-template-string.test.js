import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Fernando"', () =>{
        const name = 'Herny';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    })
})