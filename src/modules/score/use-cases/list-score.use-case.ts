/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { ListScoreRepository } from "../repository/list-score.repository";

@Injectable()
export class ListScoreUseCase {
    constructor(private readonly listScoreRepository: ListScoreRepository,
    private readonly logger:Logger) {}
  async execute(){
    try {
        const Score = await this.listScoreRepository.list();
        return Score;
    } catch (error) {
        this.logger.error('Error creating Score', error);
        throw error;
    }
  }
}