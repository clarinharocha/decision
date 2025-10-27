/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class findOneScoreRepository {
constructor(private readonly prisma: PrismaService) {}   
async findOne(id: string){
    const Score = await this.prisma.score.findUnique({where:{id}});
    return Score;
}

}