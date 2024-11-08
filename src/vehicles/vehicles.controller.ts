import { Controller,Get,Put,Post,Delete,Body,Param } from '@nestjs/common';
import {VehiclesService} from "./vehicles.service"
import {Vehicle} from "./entities/vehicle.entity"
import { promises } from 'dns';      
@Controller('vehicles')
export class VehiclesController {
    constructor (private readonly vehiclesService:VehiclesService) {}
@Get()
async findAll():Promise<Vehicle[]> {
    return this.vehiclesService.findAll()
}

@Get(":id")
async findOne(@Param("id") id:string):Promise<Vehicle> {
    return this.vehiclesService.findOne(+id)
}

@Post()
async create(@Body() vehicle:Vehicle):Promise<Vehicle> {
    return this.vehiclesService.create(vehicle)  
}

@Put(":id")
async update(
    @Param("id") id:string,
    @Body() vehicle:Vehicle, 
):Promise<Vehicle> {
    return this.vehiclesService.update(+id,vehicle)
}

@Delete(":id")
async remove(@Param("id") id:string):Promise<void> {
    return this.vehiclesService.remove(+id)
}






















}
