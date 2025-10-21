/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import {
  CreateScoreUseCase,
  ListScoreUseCase,
  DeleteScoreUseCase,
  FindOneScoreUseCase,
  UpdateScoreUseCase
} from './use-cases';

@Injectable()
export class ScoreService {
  constructor(
    private readonly createScoreUseCase: CreateScoreUseCase,
    private readonly listScoreUseCase: ListScoreUseCase,
    private readonly findoneScoreUseCase: FindOneScoreUseCase,
    private readonly deleteScoreUseCase: DeleteScoreUseCase,
    private readonly updateScoreUseCase: UpdateScoreUseCase,
  ) {}

  create(data: CreateScoreDto) {
    return this.createScoreUseCase.execute(data);
  }

  findAll() {
    return this.listScoreUseCase.list();
  }

  findOne(id: string) {
    return this.findoneScoreUseCase.findone(id);
  }

  update(id: string, data: UpdateScoreDto) {
    return this.updateScoreUseCase.update(id, data);
  }

  remove(id: string) {
    return this.deleteScoreUseCase.delete(id);
  }
}