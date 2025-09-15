import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenario } from './use-cases/create-scenario.use-case';
import { ListScenarioRepository, findOneRepository } from './repository';
import { FindOneScenario, ListScenario, UpdateScenario, deleteScenario } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenario: CreateScenario,
    private readonly listScenarioUseCase: ListScenario, 
    private readonly findOneScenario: FindOneScenario,
    private readonly deleteScenario: deleteScenario,
    private readonly updateScenarioUseCase: UpdateScenario,
    ) {}
  
  create(data: CreateScenarioDto) {
    return this.createScenario.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneScenario.execute(id);
  }

  update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, updateScenarioDto);
  }

  remove(id: string) {
    return this.deleteScenario.execute(id);
  }
}
