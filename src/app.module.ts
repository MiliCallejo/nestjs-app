import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from "./tasks/tasks.controller";

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
