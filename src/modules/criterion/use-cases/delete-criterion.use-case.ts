/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { DeleteCriterionRepository } from '../repository/delete-criterion.repository';

@Injectable()
export class DeleteCriterionUseCase {
    constructor(
        private readonly deleteCriterionRepository: DeleteCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id: string) {
        try {
            const criterion = await this.deleteCriterionRepository.delete(id);
            this.logger.log("Criterion deleted successfully");
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}