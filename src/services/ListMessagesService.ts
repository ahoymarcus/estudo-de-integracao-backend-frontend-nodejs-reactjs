import { getCustomRepository } from 'typeorm';
import { MessagesRepository } from '../repository/MessagesRepository';



class ListMessagesService {
	async execute() {
		const messagesRepository = getCustomRepository(MessagesRepository);
		
		const allMessages = await messagesRepository.find();
		
		return allMessages;
	};
};



export { ListMessagesService }



