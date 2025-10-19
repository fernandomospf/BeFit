import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciseDto {
    @ApiProperty({ example: 'Bench press' })
    name: string;

    @ApiProperty({ example: 4 })
    sets: number;

    @ApiProperty({ example: 12 })
    reps: number;

    @ApiProperty({ example: 'Use a moderate load' })
    notes?: string;
}
