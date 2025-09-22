import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository";


@Injectable()
export class ListOption{
    constructor(
        private readonly createOptionRepository: ListOptionRepository,
        private readonly logger: Logger,   
        ){}

        async execute(){
            try {
                const option = await this.createOptionRepository.list();
                return option;
            } catch (error) {
                this.logger.error(error);
                throw error;
            }
        }
}