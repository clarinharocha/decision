/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class ListScoreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const score = await this.prisma.score.findMany();
        if (!score) {throw new NotFoundException("Score not found");}
        return score;
    }
}