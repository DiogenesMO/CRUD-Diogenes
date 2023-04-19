import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from './entities/computers.entity';
import { ComputerController } from './computers.controller';
import { PcService } from './computers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Computer])],
  controllers: [ComputerController],
  providers: [PcService],
})
export class ComputerModule {}
