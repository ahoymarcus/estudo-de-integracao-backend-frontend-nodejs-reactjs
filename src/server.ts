// C:\Users\Marcus\Documents\Marcus\Programacao\Cursos e Testes\Cursos On-line\JavaScript\Node\nodejs-test-app
// https://web.dio.me/lab/integrando-um-backend-em-nodejs-com-um-frontend-em-reactjs-para-um-e-commerce/learning/71c63e6c-5fcf-4bb6-aba2-e1dc9b747e1c
import "reflect-metadata";
import express from 'express';
import cors from 'cors';

import { router } from './routes/routes';

// import './database';
  
  
    
const app = express();

app.use(cors());

app.use(express.json());
app.use(router);


const port = 5000;

app.listen(port, () => {
	console.log('Server listening on port ', port);
});




