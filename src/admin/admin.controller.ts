import { Controller, Get, Delete, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  getSubscribers() {
    return this.adminService.getSubscribers();
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.adminService.deleteUser(id);
  }

  @Post('block/:id')
  blockUser(@Param('id') id: string) {
    return this.adminService.blockUser(id);
  }

  @Post('unblock/:id')
  unblockUser(@Param('id') id: string) {
    return this.adminService.unblockUser(id);
  }
}
