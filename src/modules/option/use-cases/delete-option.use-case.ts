/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { DeleteOptionRepository } from "../repository/delete-option.repository";

@Injectable()
export class DeleteOptionUseCase {
    constructor(private readonly deleteoptionRepository: DeleteOptionRepository,
    private readonly logger:Logger) {}
  async execute(id:string){
    try {
        const option = await this.deleteoptionRepository.Delete(id);
        return option;
    } catch (error) {
        this.logger.error('Error creating option', error);
        throw error;
    }
  }
}