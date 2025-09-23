import { Injectable, Logger } from "@nestjs/common";
import { UpdateOptionRepository } from "../repository";
import { UpdateOptionDto } from "../dto/update-option.dto";



@Injectable()
export class UpdateOption {
    createOptionRepository: any;
    constructor(
        private readonly createOpyionRepository: UpdateOptionRepository,
        private readonly logger: Logger,

    ){}

    async execute(id: string, data: UpdateOptionDto){
        try{
            const option = await this.createOptionRepository.update(id, data);
            return option;
        } catch (error) {
            this.logger.error(`Error to update option: ${error.message}`, error.stack);
            throw error;
        }

    }
}