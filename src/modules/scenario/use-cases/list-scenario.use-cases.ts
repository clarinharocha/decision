/* eslint-disable prettier/prettier*/

import { Injectable, Logger } from "@nestjs/common";
import { ListScenarioRepository } from "../repository";


@Injectable()
export class ListScenario{
    constructor(
        private readonly createScenarioRepository: ListScenarioRepository,
        private readonly logger: Logger,   
        ){}

        async execute(){
            try {
                const scenario = await this.createScenarioRepository.list();
                return scenario;
            } catch (error) {
                this.logger.error(error);
                throw error;
            }
        }
}