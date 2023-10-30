import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {getDatabaseConfig} from "./shared/database/database.config";
import {UserHttpModule} from "./modules/user/user/user-http.module";

@Module({
  imports: [
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => getDatabaseConfig(configService)
      }),
      UserHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
