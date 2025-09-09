import { Injectable, Logger } from "@nestjs/common";
import { deleteRepository } from "../repository";


@Injectable()
export class deleteScenario {
    constructor(
        private readonly createScenarioRepository: deleteRepository,
        private readonly logger: Logger,    
    ){}

    async execute(id:string){
        try {
            const scenario = await this.createScenarioRepository.delete(id);
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}