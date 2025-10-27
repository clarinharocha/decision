/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { findOneScenarioRepository } from "../repository/findone.scenario.repository";

@Injectable()
export class findOneScenarioUseCase {
    constructor(private readonly findoneScenarioRepository: findOneScenarioRepository,
    private readonly logger:Logger) {}
  async execute(id:string){
    try {
        const scenario = await this.findoneScenarioRepository.findOne(id);
        return scenario;
    } catch (error) {
        this.logger.error('Error creating scenario', error);
        throw error;
    }
  }
}