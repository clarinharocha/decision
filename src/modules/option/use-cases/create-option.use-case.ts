/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";

import { CreateOptionDto } from "../dto/create-option.dto";
import { CreateOptionRepository } from "../repository";

@Injectable()
export class CreateOptionUseCase {
    constructor(private readonly createoptionRepository: CreateOptionRepository,
    private readonly logger:Logger) {}
  async execute(scenarioId: string, data: CreateOptionDto){
    try {
        const option = await this.createoptionRepository.create(scenarioId, data);
        return option;
    } catch (error) {
        this.logger.error('Error creating option', error);
        throw error;
    }
  }
}