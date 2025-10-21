/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class FindOneScoreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id:string) {
        const score = await this.prisma.score.findUnique({ where: { id } });
        return score;
    }
}