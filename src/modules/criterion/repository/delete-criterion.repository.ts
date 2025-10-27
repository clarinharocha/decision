/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class DeleteCriterionRepository {
constructor(private readonly prisma: PrismaService) {}   
async Delete (id: string){
    const Criterion = await this.prisma.criterion.delete({where:{id}});
    return Criterion;
}

}