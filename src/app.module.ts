import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "wravel",
      password: "password",
      database: "wravel",
      "entities": ["dist/**/*.entity{.ts,.js}"], // Fix needed to works @see https://docs.nestjs.com/techniques/database
      synchronize: true, // TODO: Dev only !
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
