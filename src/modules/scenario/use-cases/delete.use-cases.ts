import { Injectable, Logger } from "@nestjs/common";
import { findOneRepository } from "../repository/findone.repository";


@Injectable()
export class FindOneScenario {
    constructor(
        private readonly createScenarioRepository: findOneRepository,
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