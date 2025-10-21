/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { UpdateCriterionRepository } from '../repository/update-criterion.repository';
import { UpdateCriterionDto } from '../dto/update-criterion.dto';

@Injectable()
export class UpdateCriterionUseCase {
    constructor(
        private readonly updateCriterionRepository: UpdateCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async update(id: string, data: UpdateCriterionDto) {
        try {
            const criterion = await this.updateCriterionRepository.update(id, data);
            this.logger.log("Criterion updated successfully");
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}