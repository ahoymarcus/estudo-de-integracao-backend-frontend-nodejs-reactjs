import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';


class CreateMessageController {
	async handle(request: Request, response: Response) {
		const { email, message } = request.body;
		
		const createMessageService = new CreateMessageService();
		
		return response.json(newMessage);
	};
};



export { CreateMessageController }


