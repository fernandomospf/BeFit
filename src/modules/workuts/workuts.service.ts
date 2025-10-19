import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CreateSessionDto } from './dto/create-session.dto';

@Injectable()
export class WorkoutsService {
  constructor(private readonly prisma: PrismaService) {}

  async createWorkout(dto: CreateWorkoutDto) {
    return this.prisma.workout.create({ data: dto });
  }

  async findAll(userId: string) {
    return this.prisma.workout.findMany({
      where: { userId },
      include: { exercises: true, sessions: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const workout = await this.prisma.workout.findUnique({
      where: { id },
      include: { exercises: true, sessions: true },
    });
    if (!workout) throw new NotFoundException('Workout not found');
    return workout;
  }

  async addExercise(workoutId: string, dto: CreateExerciseDto) {
    return this.prisma.workoutExercise.create({
      data: { ...dto, workoutId },
    });
  }

  async addSession(workoutId: string, dto: CreateSessionDto, userId: string) {
    return this.prisma.workoutSession.create({
      data: { ...dto, workoutId, userId },
    });
  }
}
