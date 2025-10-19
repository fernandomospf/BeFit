import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return this.usersService.createUser(createUser);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    const dbUser = await this.usersService.findById(id);

    return dbUser;
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log('Deleting user with id:', id);
    return this.usersService.desactivateUser(id);
  }

  @Post('/reactivate/:id')
  async reactivate(@Param('id') id: string) {
    console.log('Reactivating user ID:', id);
    return this.usersService.reactivateUser(id);
  }

}
