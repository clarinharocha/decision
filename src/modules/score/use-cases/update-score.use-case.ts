/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { UpdateScoreRepository } from "../repository/update-score.repository";
import { UpdateScoreDto } from "../dto/update-score.dto";

@Injectable()
export class UpdateScoreUseCase {
    constructor(private readonly updateScoreRepository: UpdateScoreRepository,
    private readonly logger:Logger) {}
  async execute(id:string, data:UpdateScoreDto) {
    try {
        const Score = await this.updateScoreRepository.update(id, data);
        return Score;
    } catch (error) {
        this.logger.error('Error creating Score', error);
        throw error;
    }
  }
}