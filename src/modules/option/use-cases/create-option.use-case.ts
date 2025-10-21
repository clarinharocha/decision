/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { CreateOptionDto } from "../dto/create-option.dto";
import { createOptionRepository } from "../repository";



@Injectable()
export class CreateOptionUseCase {
    constructor(
        private readonly createOptionRepository: createOptionRepository,
        private readonly logger: Logger,
    ){}

    async execute(data: CreateOptionDto) {
            try {
                const Option = await this.createOptionRepository.create(data);
                this.logger.log('Option created: ${Option.title');
                return Option;
            } catch (error) {
                this.logger.error(error);
                throw error;
            }
    }
}