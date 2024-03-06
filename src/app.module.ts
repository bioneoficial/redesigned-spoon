import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ApiHeader } from './authentication/utils/api-header';
import { ApiResponse } from './authentication/utils/api-response';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, ApiHeader, ApiResponse],
})
export class AppModule {}
