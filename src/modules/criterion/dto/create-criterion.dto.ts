/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    active: boolean;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    createdAt: Date;
    // Scores: Score[];
}