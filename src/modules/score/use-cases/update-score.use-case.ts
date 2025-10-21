/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { UpdateScoreRepository } from '../repository/update-score.repository';
import { UpdateScoreDto } from '../dto/update-score.dto';

@Injectable()
export class UpdateScoreUseCase {
    constructor(
        private readonly updateScoreRepository: UpdateScoreRepository,
        private readonly logger: Logger,
    ) {}

    async update(id: string, data: UpdateScoreDto) {
        try {
            const score = await this.updateScoreRepository.update(id, data);
            this.logger.log("Score updated successfully");
            return score;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}