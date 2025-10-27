/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'sopa'
    })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'macarrao'
    })
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'agua'
    })
    active: boolean;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'tempero'
    })
    createdAt: Date;
    // Scores: Score[];
}