import { render, screen} from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en FirstApp', () => { 
    
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    
    test('Debe de hacer match con el snapshot', () => { 
               
        const {container} = render(<FirstApp title={title}></FirstApp>);
        expect(container).toMatchSnapshot();

    });

    test('Debe de hacer match con el snapshot', () => { 
               
        render(<FirstApp title={title}></FirstApp>);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();

    });
    

     test('Debe mostrar el titulo h1', () => { 
        
        render(<FirstApp title={title}></FirstApp>);
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);


     })


     test('Debe mostrar el subtitulo enviado por props', () => { 
        
        render(
            <FirstApp 
                title={title}
                subTitle={subTitle}
            />
        );
        
        expect(screen.getAllByText(subTitle).length).toBe(1);


     })
 })