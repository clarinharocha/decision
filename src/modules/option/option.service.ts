import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOption, FindOneOption, ListOption, UpdateOption, deleteOption } from './use-cases';

@Injectable()
export class OptionService {
  constructor(
    private readonly createOption: CreateOption,
    private readonly listOptionUseCase: ListOption, 
    private readonly findOneOption: FindOneOption,
    private readonly updateOptionUseCase: UpdateOption,
    private readonly deleteOption: deleteOption,

    ) {}

  create(data: CreateOptionDto) {
    return this.createOption.execute(data);
  }

  findAll() {
    return this.listOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneOption.execute(id);
  }

  update(id: string, updateOptionDto: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, updateOptionDto);
  }

  remove(id: string) {
    return this.deleteOption.execute(id);
  }
}
