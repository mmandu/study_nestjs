import { Module } from '@nestjs/common';
// import { EmailModule } from 'src/email/email.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [
    // EmailModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService, ConfigService, EmailService, AuthService ],
})
export class UsersModule { }