/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    optionId: string;

    @IsString()
    @IsNotEmpty()
    criterionId: string;
}