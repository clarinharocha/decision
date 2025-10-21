/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneCriterionRepository } from '../repository/findone-criterion.repository';

@Injectable()
export class FindOneCriterionUseCase {
    constructor(
        private readonly findoneCriterionRepository: FindOneCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id: string) {
        try {
            const criterion = await this.findoneCriterionRepository.findone(id);
            this.logger.log("Criterion found successfully");
            if (!criterion) return new NotFoundException("Criterion not found");
            return criterion;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("Criterion not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}