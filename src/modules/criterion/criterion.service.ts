/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';
import { CreateCriterionUseCase, ListCriterionUseCase, DeleteCriterionUseCase, FindOneCriterionUseCase, UpdateCriterionUseCase } from './use-cases';

@Injectable()
export class CriterionService {
  constructor(
    private readonly createCriterionUseCase: CreateCriterionUseCase, 
    private readonly listCriterionUseCase: ListCriterionUseCase, 
    private readonly findoneCriterionUseCase: FindOneCriterionUseCase,
    private readonly deleteCriterionUseCase: DeleteCriterionUseCase,
    private readonly updateCriterionUseCase: UpdateCriterionUseCase
  ) { }
  
  create(data: CreateCriterionDto) {
    return this.createCriterionUseCase.execute(data);
  }

  findAll() {
    return this.listCriterionUseCase.list();
  }

  findOne(id: string) {
    return this.findoneCriterionUseCase.findone(id);
  }

  update(id: string, data: UpdateCriterionDto) {
    return this.updateCriterionUseCase.update(id, data);
  }

  remove(id: string) {
    return this.deleteCriterionUseCase.delete(id);
  }
}