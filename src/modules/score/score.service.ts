/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { CreateScoreUseCase, DeleteScoreUseCase, FindOneScoreUseCase, ListScoreUseCase, UpdateScoreUseCase } from './use-cases';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';

@Injectable()
export class ScoreService {
  constructor(private readonly createscoreUseCase: CreateScoreUseCase, 
    private readonly listScoreUseCase: ListScoreUseCase,
    private readonly findoneScoreUseCase: FindOneScoreUseCase,
    private readonly deleteScoreUseCase: DeleteScoreUseCase,
    private readonly updateScoreUseCase: UpdateScoreUseCase) {}

  create(data: CreateScoreDto) {
    return this.createscoreUseCase.execute(data);
  }

  findAll() {
   return this.listScoreUseCase.execute();
  }


  findOne(id: string) {
    return this.findoneScoreUseCase.execute(id);
  }

  update(id: string , data:UpdateScoreDto) {
    return this.updateScoreUseCase.execute(id, data);
  }

  remove(id:string) {
    return this.deleteScoreUseCase.execute(id);
  }
}
