import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('Pruebas en 11-async-await', () => { 
    
    test('getImagen debe retoranr un URL', async() => { 

        const url = await getImagen();
        console.log("esta es la url " + url);

        expect(typeof url).toBe("string");


     });

 });

