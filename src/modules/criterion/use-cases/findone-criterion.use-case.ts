/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { findOneCriterionRepository } from "../repository/findone-criterion.repository";

@Injectable()
export class FindOneCriterionUseCase {
    constructor(private readonly findoneCriterionRepository: findOneCriterionRepository,
    private readonly logger:Logger) {}
  async execute(id:string){
    try {
        const Criterion = await this.findoneCriterionRepository.findOne(id);
        return Criterion;
    } catch (error) {
        this.logger.error('Error creating Criterion', error);
        throw error;
    }
  }
}