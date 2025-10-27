/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { UpdateCriterionRepository } from "../repository/update-criterion.repository";
import { UpdateCriterionDto } from "../dto/update-criterion.dto";

@Injectable()
export class UpdateCriterionUseCase {
    constructor(private readonly updateCriterionRepository: UpdateCriterionRepository,
    private readonly logger:Logger) {}
  async execute(id:string, data:UpdateCriterionDto) {
    try {
        const Criterion = await this.updateCriterionRepository.update(id, data);
        return Criterion;
    } catch (error) {
        this.logger.error('Error creating Criterion', error);
        throw error;
    }
  }
}