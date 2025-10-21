/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { ListOptionRepository } from '../repository/list-option.repository';


@Injectable()
export class ListOptionUseCase {
    constructor(
        private readonly listOptionRepository: ListOptionRepository,
        private readonly logger: Logger,
    ) {}

    async list(){
        try {
            const Option = this.listOptionRepository.list();
            this.logger.log("Option listed successfully");
            return Option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}