import { Injectable, Logger } from "@nestjs/common";
import { deleteRepository } from "../repository";


@Injectable()
export class deleteOption {
    constructor(
        private readonly deleteOptionRepository: deleteRepository,
        private readonly logger: Logger,    
    ){}

    async execute(id:string){
        try {
            const option = await this.deleteOptionRepository.delete(id);
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}