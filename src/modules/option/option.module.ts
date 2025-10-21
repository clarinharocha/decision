/* eslint-disable prettier/prettier */
import { Logger, Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { sharedModule } from 'src/shared/shared.module';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [sharedModule],
  controllers: [OptionController],
  providers: [OptionService, ...useCases, ...repositories, Logger],
})
export class OptionModule {}
