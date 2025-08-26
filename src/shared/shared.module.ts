import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./databases/prisma.database";    
import { Logger } from "@nestjs/common/services/logger.service";


@Global()
@Module({
    imports: [],
    providers: [PrismaService, Logger],
    exports: [PrismaService],
})
export class SharedModule {}