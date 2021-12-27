import { Router, Request, Response } from 'express';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ListMessageController } from './controllers/ListMessageController';



const router = Router();

const createMessageController = new CreateMessageController;
const listMesageController = new ListMessageController;

router.get('/', (request: Request, response: Response) => {
	return response.json({ message: 'Bem vind a API Dio Shopping'});
});



router.get('/message', listMesageController.hanle);
router.post('/message', createMessageController.hanle);



export { router }



