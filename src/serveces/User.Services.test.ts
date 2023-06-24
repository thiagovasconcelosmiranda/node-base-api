import { User, UserInstance} from '../models/User';

import  * as UserServices from './User.Servece';

describe('Testing user services', () =>{
    let email = 'teste@gmail.com';
    let password = '1234';

    // antes de tudo vaideletar a tabela no banco de dados
  
    beforeAll(async ()=>{ 
      await User.sync({force: false})
     });

    it('shold create a new user', async ()=>{
       const newUser = await UserServices.createUser(email, password) as UserInstance;
       expect(newUser).not.toBeInstanceOf(Error);
       expect(newUser).toHaveProperty('id');
       expect(newUser.email).toBe(email);
    });

    it('sholt not allow to create a user with existing email', async () =>{
        const newUser = await UserServices.createUser(email, password);
        expect(newUser).toBeInstanceOf(Error);
    });

    it('shold find a user by the email', async () => {
         const user = await UserServices.findByEmail(email) as UserInstance;
         expect(user.email).toBe(email);
    });

    it('should mutch the password from database', async () => {
       const user = await UserServices.findByEmail(email) as UserInstance;
       const match = UserServices.matchPassword(password, user.password);
       expect(match).toBeTruthy();
    });

    it('shoult get a list of users', async () => {
        const users = await UserServices.all();
        expect(users.length).toBeGreaterThanOrEqual(1);

        for(let i in users){
         expect(users[i]).toBeInstanceOf( User);
        }
    })

})