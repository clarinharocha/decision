/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { findOneScoreRepository } from "../repository/findone-score.repository";

@Injectable()
export class FindOneScoreUseCase {
    constructor(private readonly findoneScoreRepository: findOneScoreRepository,
    private readonly logger:Logger) {}
  async execute(id:string){
    try {
        const Score = await this.findoneScoreRepository.findOne(id);
        return Score;
    } catch (error) {
        this.logger.error('Error creating Score', error);
        throw error;
    }
  }
}