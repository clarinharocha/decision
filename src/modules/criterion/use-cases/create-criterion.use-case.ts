/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";

import { CreateCriterionDto } from "../dto/create-criterion.dto";
import { CreateCriterionRepository } from "../repository";

@Injectable()
export class CreateCriterionUseCase {
    constructor(private readonly createCriterionRepository: CreateCriterionRepository,
    private readonly logger:Logger) {}
  async execute(data: CreateCriterionDto){
    try {
        const Criterion = await this.createCriterionRepository.create(data);
        return Criterion;
    } catch (error) {
        this.logger.error('Error creating Criterion', error);
        throw error;
    }
  }
}