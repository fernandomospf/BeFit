import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
    @ApiProperty({ example: '2025-10-18T10:00:00Z', description: 'Session date and time (ISO 8601)' })
    sessionDate: Date;

    @ApiProperty({ example: 60, description: 'Total duration in minutes' })
    totalDuration: number;

    @ApiProperty({ example: 'Light workout feeling today', description: 'Optional notes about the session', required: false })
    notes?: string;
}
