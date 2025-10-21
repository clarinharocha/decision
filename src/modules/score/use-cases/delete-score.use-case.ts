/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { DeleteScoreRepository } from '../repository/delete-score.repository';

@Injectable()
export class DeleteScoreUseCase {
    constructor(
        private readonly deleteScoreRepository: DeleteScoreRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id: string) {
        try {
            const score = await this.deleteScoreRepository.delete(id);
            this.logger.log("Score deleted successfully");
            return score;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}