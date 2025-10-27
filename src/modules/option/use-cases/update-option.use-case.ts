/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { UpdateOptionRepository } from "../repository/update-option.repository";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable()
export class UpdateOptionUseCase {
    constructor(private readonly updateOptionRepository: UpdateOptionRepository,
    private readonly logger:Logger) {}
  async execute(id:string, data:UpdateOptionDto) {
    try {
        const option = await this.updateOptionRepository.update(id, data);
        return option;
    } catch (error) {
        this.logger.error('Error creating option', error);
        throw error;
    }
  }
}