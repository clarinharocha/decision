/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";

import { CreateScoreDto } from "../dto/create-score.dto";
import { CreateScoreRepository } from "../repository";

@Injectable()
export class CreateScoreUseCase {
    constructor(private readonly createScoreRepository: CreateScoreRepository,
    private readonly logger:Logger) {}
  async execute(data: CreateScoreDto){
    try {
        const Score = await this.createScoreRepository.create(data);
        return Score;
    } catch (error) {
        this.logger.error('Error creating Score', error);
        throw error;
    }
  }
}