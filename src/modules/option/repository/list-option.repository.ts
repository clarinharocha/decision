/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class ListOptionRepository{
     constructor(private readonly prisma: PrismaService) {}

     async list () {
        const option = await this.prisma.option.findMany({
            include: {
                scores:true
            }
        })
            return option; 
        }   
}