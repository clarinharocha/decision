/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneOptionRepository } from '../repository/findone-option.repository';


@Injectable()
export class FindOneOptionUseCase {
    constructor(
        private readonly findoneOptionRepository: FindOneOptionRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const Option = await this.findoneOptionRepository.findone(id);
            this.logger.log("Option found successfully");
            if (!Option) return new NotFoundException("Option not found");
            return Option;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("Option not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}