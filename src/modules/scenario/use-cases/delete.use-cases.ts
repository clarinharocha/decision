import { Injectable, Logger } from "@nestjs/common";
import { deleteRepository } from "../repository";


@Injectable()
export class deleteScenario {
    constructor(
        private readonly deleteScenarioRepository: deleteRepository,
        private readonly logger: Logger,    
    ){}

    async execute(id:string){
        try {
            const scenario = await this.deleteScenarioRepository.delete(id);
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}