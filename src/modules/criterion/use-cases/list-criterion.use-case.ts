/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { ListCriterionRepository } from '../repository/list-criterion.repository';


@Injectable()
export class ListCriterionUseCase {
    constructor(
        private readonly listCriterionRepository: ListCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async list(){
        try {
            const criterion = this.listCriterionRepository.list();
            this.logger.log("Criterion listed successfully");
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}