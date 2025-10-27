/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { DeleteScenarioUseCase, findOneScenarioUseCase, ListScenarioUseCase } from './use-cases';
import { UpdateScenarioUseCase } from './use-cases/update-scenario.use-case';
import { UpdateScenarioDto } from './dto/update-scenario.dto';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, 
    private readonly listScenarioUseCase: ListScenarioUseCase,
    private readonly findoneScenarioUseCase: findOneScenarioUseCase,
    private readonly deleteScenarioUseCase: DeleteScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
   return this.listScenarioUseCase.execute();
  }


  findOne(id: string) {
    return this.findoneScenarioUseCase.execute(id);
  }

  update(id: string , data:UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, data);
  }

  remove(id:string) {
    return this.deleteScenarioUseCase.execute(id);
  }
}
