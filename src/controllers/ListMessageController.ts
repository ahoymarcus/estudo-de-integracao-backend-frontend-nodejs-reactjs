import { Request, Response } from 'express';
import { ListMessagesService } from '../services/ListMessagesService';



class ListMessageController {
	async hanle(request: Request, response: Response) {
		const listMessagesService = new ListMessagesService();
		
		const allMessages = await listMessagesService.execute();
		
		return response.json(allMessages);
	};
};



export { ListMessageController }


