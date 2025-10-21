/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CreateScoreRepository } from '../repository/create-score.repository';
import { CreateScoreDto } from '../dto/create-score.dto';

@Injectable()
export class CreateScoreUseCase {
    constructor(
        private readonly createScoreRepository: CreateScoreRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateScoreDto){
        try {
            const score = this.createScoreRepository.create(data);
            this.logger.log('Score created successfully');
            return score;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}