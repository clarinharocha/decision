/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CreateCriterionRepository } from '../repository/create-criterion.repository';
import { CreateCriterionDto } from '../dto/create-criterion.dto';

@Injectable()
export class CreateCriterionUseCase {
    constructor(
        private readonly createCriterionRepository: CreateCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateCriterionDto){
        try {
            const criterion = this.createCriterionRepository.create(data);
            this.logger.log('Criterion created successfully');
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}