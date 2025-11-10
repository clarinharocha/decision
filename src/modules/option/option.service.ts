/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { CreateOptionUseCase, DeleteOptionUseCase, FindOneoptionUseCase, ListOptionUseCase, UpdateOptionUseCase } from './use-cases';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase: CreateOptionUseCase, 
    private readonly listOptionUseCase: ListOptionUseCase,
    private readonly findoneOptionUseCase: FindOneoptionUseCase,
    private readonly deleteOptionUseCase: DeleteOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase) {}

  create(scenarioId: string, data: CreateOptionDto) {
    return this.createOptionUseCase.execute(scenarioId, data);
  }

  findAll() {
   return this.listOptionUseCase.execute();
  }


  findOne(id: string) {
    return this.findoneOptionUseCase.execute(id);
  }

  update(id: string , data:UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, data);
  }

  remove(id:string) {
    return this.deleteOptionUseCase.execute(id);
  }
}
