import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes2 from '../../src/data/heroes';

describe('pruebas en 08-imp-exp', () => { 
    
    test('getHeroesById debe retornar ID', () => { 
        
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    }) 

    test('getHeroesById debe retornar Undifiend si no existe ID', () => { 
        
        const id = 10;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toBeFalsy();

    }) 


    //----------------Tarea---------------------
    test('getHeroesByOwner debe regresar heroes de DC', () => {   

        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])

        expect(heroes).toEqual(heroes2.filter( (heroe) => heroe.owner === owner))

    })


    test('getHeroesByOwner debe regresar heroes de Marvel', () => {   

        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
        console.log(heroes)

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])

        expect(heroes).toEqual(heroes2.filter( (heroe) => heroe.owner === owner))

    })

 })


