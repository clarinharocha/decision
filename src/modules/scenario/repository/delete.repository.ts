import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class deleteRepository {
    constructor (private readonly prisma:PrismaService) { }
    async delete(id:string){
        const scenario = await this.prisma.scenario.delete({
            where: {id}
        });
        return scenario;
    }
}