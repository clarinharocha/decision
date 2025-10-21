/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class ListCriterionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const criterion = await this.prisma.criterion.findMany(
            {
                include:{
                scores:true
                }
            }
        );
        if (!criterion) {throw new NotFoundException("Criterion not found");}
        return criterion;
    }
}