/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateScenarioDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Choose the best programming language",
        description: "calestini"
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Choose the best programming language",
        description: "eduardo"
    })
    description: string;
    // options: Option[]
}