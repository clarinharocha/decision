/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class findOneCriterionRepository {
constructor(private readonly prisma: PrismaService) {}   
async findOne(id: string){
    const Criterion = await this.prisma.criterion.findUnique({where:{id}});
    return Criterion;
}

}