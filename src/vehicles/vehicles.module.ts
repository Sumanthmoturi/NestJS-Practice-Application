import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { TypeOrmModule } from '@nestjs/typeorm' ;
import {Vehicle} from "./entities/vehicle.entity"

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService],
  imports:[TypeOrmModule.forFeature([Vehicle])]
})
export class VehiclesModule {}
