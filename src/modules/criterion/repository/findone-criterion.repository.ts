/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class FindOneCriterionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id: string) {
        const criterion = await this.prisma.criterion.findUnique({ where: { id } });
        return criterion;
    }
}