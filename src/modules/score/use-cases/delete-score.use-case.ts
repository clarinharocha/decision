/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { DeleteScoreRepository } from "../repository/delete-score.repository";

@Injectable()
export class DeleteScoreUseCase {
    constructor(private readonly deleteScoreRepository: DeleteScoreRepository,
    private readonly logger:Logger) {}
  async execute(id:string){
    try {
        const Score = await this.deleteScoreRepository.Delete(id);
        return Score;
    } catch (error) {
        this.logger.error('Error creating Score', error);
        throw error;
    }
  }
}