/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { findOneOptionRepository } from "../repository/findone-option.repository";

@Injectable()
export class FindOneoptionUseCase {
    constructor(private readonly findoneoptionRepository: findOneOptionRepository,
    private readonly logger:Logger) {}
  async execute(id:string){
    try {
        const option = await this.findoneoptionRepository.findOne(id);
        return option;
    } catch (error) {
        this.logger.error('Error creating option', error);
        throw error;
    }
  }
}