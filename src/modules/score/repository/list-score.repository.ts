/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class ListScoreRepository {
constructor(private readonly prisma: PrismaService) {}   
async list(){
    const Score = await this.prisma.score.findMany({});
    return Score;
}

}