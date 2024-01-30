import { TaskStatus } from "../task.entity"
//  se importa el IsString para validar de que se reciba si o si un string
import {  IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, isEnum } from "class-validator"

//  Data Trasnformer Object (o algo así, tal caso para recibir objetos)
export class createTaskDto {
    //  decorardor para validar String
    @IsString()
    //  no debe estar vacío
    @IsNotEmpty()
    //  debe tener minimo 3 caracteres
    @MinLength(3)
    title: String
    @IsString()
    description: String
}

export class updatedTaskDto {
    //  valida que si sea string
    @IsString()
    //  hace que sea opcional este cmapo
    @IsOptional()
    title?: String
    @IsString()
    @IsOptional()
    description?: String
    @IsString()
    @IsEnum(TaskStatus)
    status?: TaskStatus
}