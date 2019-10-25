import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class UserDto {
    @IsNotEmpty()
    @ApiModelProperty({ required: true })
    readonly name: string;
    @IsNotEmpty()
    @ApiModelProperty({ description: 'User email address', required: false })
    readonly email: string;
    @IsOptional()
    @ApiModelProperty({ required: false })
    readonly age: number;
}