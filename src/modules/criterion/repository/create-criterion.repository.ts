/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateCriterionDto } from "../dto/create-criterion.dto";

@Injectable()
export class CreateCriterionRepository {
constructor(private readonly prisma: PrismaService) {}   
async create(data: CreateCriterionDto){
    const Criterion = await this.prisma.criterion.create({data});
    return Criterion;
}

}