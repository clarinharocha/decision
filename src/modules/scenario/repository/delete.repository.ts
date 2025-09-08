import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class findOneRepository {
    constructor (private readonly prisma:PrismaService) { }
    async findOne(id:string){
        const scenario = await this.prisma.scenario.delete({
            where: {id}
        });
        return scenario;
    }
}