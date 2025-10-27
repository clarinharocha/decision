/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { ListCriterionRepository } from "../repository/list-criterion.repository";

@Injectable()
export class ListCriterionUseCase {
    constructor(private readonly listCriterionRepository: ListCriterionRepository,
    private readonly logger:Logger) {}
  async execute(){
    try {
        const Criterion = await this.listCriterionRepository.list();
        return Criterion;
    } catch (error) {
        this.logger.error('Error creating Criterion', error);
        throw error;
    }
  }
}