/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { ListScoreRepository } from '../repository/list-score.repository';


@Injectable()
export class ListScoreUseCase {
    constructor(
        private readonly listScoreRepository: ListScoreRepository,
        private readonly logger: Logger,
    ) {}

    async list() {
        try {
            const score = this.listScoreRepository.list();
            this.logger.log("Score listed successfully");
            return score;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}