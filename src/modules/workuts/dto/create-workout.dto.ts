import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkoutDto {
    @ApiProperty({ example: 'Workout A - Chest and Triceps' })
    name: string;

    @ApiProperty({ example: 'Monday' })
    dayOfWeek: string;

    @ApiProperty({ example: 'Chest and Triceps' })
    muscleGroup?: string;

    @ApiProperty({ example: 'd8a53b7e-1b9c-4f91-a258-9a1f3f11e25b' })
    userId: string;
}
