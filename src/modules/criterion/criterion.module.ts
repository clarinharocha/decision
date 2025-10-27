/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { CriterionService } from './criterion.service';
import { CriterionController } from './criterion.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/databases/shared.module';


const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);


@Module({
  controllers: [CriterionController],
  providers: [CriterionService, ...useCases, ...repositories, Logger],
  imports : [SharedModule],
})
export class CriterionModule {}
