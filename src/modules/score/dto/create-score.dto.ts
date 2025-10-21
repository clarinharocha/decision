/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    optionId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    criterionId: string;
}