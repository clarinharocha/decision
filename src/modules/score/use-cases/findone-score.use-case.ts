/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneScoreRepository } from '../repository/findone-score.repository';


@Injectable()
export class FindOneScoreUseCase {
    constructor(
        private readonly findoneScoreRepository: FindOneScoreRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id: string) {
        try {
            
            const score = await this.findoneScoreRepository.findone(id);
            this.logger.log("Score found successfully");
            if (!score) return new NotFoundException("Score not found");
            return score;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("Score not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}