import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenario } from './use-cases/create-scenario.use-case';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenario: CreateScenario) {}
  
  create(data: CreateScenarioDto) {
    return this.createScenario.execute(data);
  }

  findAll() {
    return `This action returns all scenario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
