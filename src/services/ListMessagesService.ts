import { getCustomRepository } from 'typeorm';
import { MessageRepository } from '../repository/MessageRepository';



class ListMessageService {
	async execute() {
		const messageRepository = getCustomRepository(MessageRepository);
		
		const allMessages = await messageRepository.find();
		
		return allMessages;
	};
};



export { ListMessageService }



