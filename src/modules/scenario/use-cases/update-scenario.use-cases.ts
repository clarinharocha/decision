import { Injectable, Logger } from "@nestjs/common";
import { UpdateScenarioRepository } from "../repository";
import { UpdateScenarioDto } from "../dto/update-scenario.dto";



@Injectable()
export class UpdateScenario {
    constructor(
        private readonly createScenarioRepository: UpdateScenarioRepository,
        private readonly logger: Logger,

    ){}

    async execute(id: string, data: UpdateScenarioDto){
        try{
            const scenario = await this.createScenarioRepository.update(id, data);
            return scenario;
        } catch (error) {
            this.logger.error(`Error to update scenario: ${error.message}`, error.stack);
            throw error;
        }

    }
}
