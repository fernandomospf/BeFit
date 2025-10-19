import { Body, Controller, Get, Post, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/list')
  @ApiOperation({ summary: 'Get all users' })
  @ApiQuery({
    name: 'isActive',
    required: false,
    type: Boolean,
    description: 'Optional filter to return only active (true) or inactive (false) users. Pass true or false.'
  })
  @ApiOkResponse({ description: 'List of users', type: CreateUserDto, isArray: true })
  async findAll(@Query('isActive') isActive?: string) {
    return this.usersService.findAll(isActive);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ description: 'User found', type: CreateUserDto })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findOne(@Param('id') id: string) {
    const dbUser = await this.usersService.findById(id);
    return dbUser;
  }

  @Post('/reactivate/:id')
  @ApiOperation({ summary: 'Reactivate a deactivated user by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ description: 'User reactivated' })
  async reactivate(@Param('id') id: string) {
    console.log('Reactivating user ID:', id);
    return this.usersService.reactivateUser(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ description: 'User created', type: CreateUserDto })
  async create(@Body() createUser: CreateUserDto) {
    return this.usersService.createUser(createUser);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deactivate (soft-delete) a user by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ description: 'User deactivated' })
  async remove(@Param('id') id: string) {
    console.log('Deleting user with id:', id);
    return this.usersService.desactivateUser(id);
  }
}
