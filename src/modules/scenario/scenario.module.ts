/* eslint-disable prettier/prettier */
import { Logger, Module} from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/databases/shared.module';


const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  controllers: [ScenarioController],
  providers: [ScenarioService, ...useCases, ...repositories, Logger],
  imports : [SharedModule],
})
export class ScenarioModule {}
