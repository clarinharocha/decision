/* eslint-disable prettier/prettier */
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    active: boolean;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;
    // Scores: Score[];
}