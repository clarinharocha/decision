/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";
import { UpdateScoreDto } from "../dto/update-score.dto";

@Injectable()
export class UpdateScoreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async update(id:string, data: UpdateScoreDto) {
        const score = await this.prisma.score.update({
            where: { id },
            data
        });
        return score;
    }
}