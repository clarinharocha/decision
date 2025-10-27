/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateCriterionDto } from "../dto/update-criterion.dto";


@Injectable()
export class UpdateCriterionRepository {
constructor(private readonly prisma: PrismaService) {}   
async update (id: string, data: UpdateCriterionDto){
    const Criterion = await this.prisma.criterion.update({where:{id}, data});
    return Criterion;
}

}