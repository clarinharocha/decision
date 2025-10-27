/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateOptionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "Choose the best programming language",
        example: "prato"
        
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'garfo'
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 2
    })
    scenarioId: string;
    // Scores: Score[]
}