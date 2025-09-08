import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenario } from './use-cases/create-scenario.use-case';
import { ListScenarioRepository, findOneRepository } from './repository';
import { FindOneScenario, ListScenario } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenario: CreateScenario,
    private readonly listScenarioUseCase: ListScenario, 
    private readonly findOneScenario: FindOneScenario
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

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
