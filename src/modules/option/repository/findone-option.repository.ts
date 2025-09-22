import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class findOneRepository {
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    constructor (private readonly prisma:PrismaService) { }
    async findOne(id:string){
        const option = await this.prisma.option.findUnique({
            where: {id}
        });
        return option;
    }
}