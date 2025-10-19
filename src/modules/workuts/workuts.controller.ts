import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
    ApiTags,
    ApiParam,
    ApiOperation,
    ApiResponse,
    ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { WorkoutsService } from './workuts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CreateSessionDto } from './dto/create-session.dto';

@ApiTags('workouts')
@Controller('workouts')
export class WorkoutsController {
    constructor(private readonly workoutsService: WorkoutsService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo treino' })
    @ApiBody({ type: CreateWorkoutDto })
    @ApiResponse({ status: 201, description: 'Treino criado', type: CreateWorkoutDto })
    createWorkout(@Body() dto: CreateWorkoutDto) {
        return this.workoutsService.createWorkout(dto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar treinos' })
    @ApiQuery({
        name: 'userId',
        required: false,
        description: 'Filtrar treinos por userId (opcional)',
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de treinos',
        isArray: true,
        type: CreateWorkoutDto,
    })
    findAll(@Query('userId') userId: string) {
        return this.workoutsService.findAll(userId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter detalhes de um treino' })
    @ApiParam({ name: 'id', description: 'ID do treino' })
    @ApiResponse({ status: 200, description: 'Detalhes do treino', type: CreateWorkoutDto })
    findOne(@Param('id') id: string) {
        return this.workoutsService.findOne(id);
    }

    @Post(':id/exercises')
    @ApiOperation({ summary: 'Adicionar exercício ao treino' })
    @ApiParam({ name: 'id', description: 'ID do treino' })
    @ApiBody({ type: CreateExerciseDto })
    @ApiResponse({ status: 201, description: 'Exercício adicionado', type: CreateExerciseDto })
    addExercise(@Param('id') id: string, @Body() dto: CreateExerciseDto) {
        return this.workoutsService.addExercise(id, dto);
    }

    @Post(':id/sessions')
    @ApiOperation({ summary: 'Adicionar sessão ao treino' })
    @ApiParam({ name: 'id', description: 'ID do treino' })
    @ApiQuery({ name: 'userId', required: true, description: 'ID do usuário' })
    @ApiBody({ type: CreateSessionDto })
    @ApiResponse({ status: 201, description: 'Sessão adicionada', type: CreateSessionDto })
    addSession(
        @Param('id') id: string,
        @Query('userId') userId: string,
        @Body() dto: CreateSessionDto,
    ) {
        return this.workoutsService.addSession(id, dto, userId);
    }
}
