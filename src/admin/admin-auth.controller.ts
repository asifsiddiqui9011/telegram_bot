import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';

@Controller('admin-auth')
export class AdminAuthController {
    constructor(private readonly adminAuthService: AdminAuthService) {}

    @Post('register')
    async register(@Body('token') token: string) {
        return this.adminAuthService.register(token);
    }

    @Put('update-token/:userId')
    async updateToken(@Param('userId') userId: string, @Body('telegramToken') telegramToken: string) {
        await this.adminAuthService.updateToken(userId, telegramToken);
    }
}