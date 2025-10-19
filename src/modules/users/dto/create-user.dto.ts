import { IsEmail, IsNumber, IsOptional, IsString, IsUrl, Max, Min, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
    @IsOptional()
    @IsEmail({}, { message: 'The provided email is invalid.' })
    email?: string;

    @IsOptional()
    @IsString({ message: 'Name must be a string.' })
    name?: string;

    @IsOptional()
    @IsUrl({}, { message: 'Avatar URL must be valid.' })
    avatarUrl?: string;

    @IsBoolean({ message: 'isActive must be a boolean.' })
    isActive: boolean;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Height can have at most 2 decimal places.' })
    @Min(0, { message: 'Height cannot be negative.' })
    @Max(3, { message: 'Maximum allowed height is 3 meters.' })
    height?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Weight can have at most 2 decimal places.' })
    @Min(0, { message: 'Weight cannot be negative.' })
    @Max(500, { message: 'Maximum allowed weight is 500 kg.' })
    currentWeight?: number;
}
