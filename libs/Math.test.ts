import {Math} from './Math';

describe('Testing Math library', ()=>{
	/*
      beforeEach(()=>{
       //bla bla bla
     });//execulta depois test

	   afterEach(()=>{  

		});//reverte 


		beforeAll(()=>{

		}); //antes todos

		afterAll(()=>{ 
        
		});//depois de todos os testes
      */
    it('should sum two numbers correctly', ()=>{ 
        const response =  Math.sum(5,10);
        expect(response).toBe(15); //Espero que esta resposta seja 15
      });

      it('should subtration two numbers correctly', ()=>{
        const response =  Math.sub(10,2);
        expect(response).toBe(8); //Espero que esta resposta seja 15
      });

      it('should multiply two numbers correctly', ()=>{
        const response =  Math.mut(3,5);
        expect(response).toBe(15); //Espero que esta resposta seja 15
      });

      it('should divide two numbers correctly', ()=>{
        const response =  Math.div(15,5);
        expect(response).toBe(3); //Espero que esta resposta seja 3
        const response2 =  Math.div(3,0); 
       // expect(response2).toBe(false); //ou
       expect(response2).toBeFalsy(); //  falso ou
      // expect(response2).toThrow(); verdadeiro
      });
       /*
      it.only('contar quantos caracteres tem na string', () => {
          const response  = 'Thiago';
          expect(response).toHaveLength(6);
      });
     */

      it.only('se possui a propriedade EMAIL', () => {
        /*
        const response  = {
          name:'Thiago',
          email: 'thiago@gmail.com'
        }
       */
        //const response = 15;
        //expect(response).toHaveProperty('email');
        //expect(response).not.toBeUndefined();
        //expect(response).toBeGreaterThanOrEqual(15);
        //expect(response). toBeLessThanOrEqual(50);//menor que 50

        //const response = 'profissao33@gmailcom';
        //expect(response).toMatch(/[a-z]@[a-z].[a-z]/); verifica se é um email

        const response = Math.div(10,0);
        expect(response).toThrow(new Error('Não divide por zero'));
    });
});