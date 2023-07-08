import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn} from "class-validator";
import { TaskStatus } from "../tasks.entity";

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: String

    @IsString()
    description: String
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: String;

    @IsString()
    @IsOptional()
    description?: String;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;
}