/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class DeleteScoreRepository {
constructor(private readonly prisma: PrismaService) {}   
async Delete (id: string){
    const Score = await this.prisma.score.delete({where:{id}});
    return Score;
}

}