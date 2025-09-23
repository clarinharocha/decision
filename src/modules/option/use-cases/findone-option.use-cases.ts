import { Injectable, Logger } from "@nestjs/common";
import { findOneRepository } from "../repository/findone-option.repository";


@Injectable()
export class FindOneOption {
    constructor(
        private readonly createOptionRepository: findOneRepository,
        private readonly logger: Logger,    
    ){}

    async execute(id:string){
        try {
            const option = await this.createOptionRepository.findOne(id);
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}