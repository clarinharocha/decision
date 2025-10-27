/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { DeleteCriterionRepository } from "../repository/delete-criterion.repository";

@Injectable()
export class DeleteCriterionUseCase {
    constructor(private readonly deleteCriterionRepository: DeleteCriterionRepository,
    private readonly logger:Logger) {}
  async execute(id:string){
    try {
        const Criterion = await this.deleteCriterionRepository.Delete(id);
        return Criterion;
    } catch (error) {
        this.logger.error('Error creating Criterion', error);
        throw error;
    }
  }
}