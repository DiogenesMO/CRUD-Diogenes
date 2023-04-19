import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Delete, Patch } from "@nestjs/common";
import { PcService } from "./computers.service";
import { CreatePcDto } from "./dto/computers.dto";

@Controller('pc')
export class ComputerController {
    constructor (
        private readonly pcServiceRepo: PcService) {}

        //metodo para crear un producto
        @Post()
        create(@Body() productodto: CreatePcDto) {
            return this.pcServiceRepo.create(productodto)
        }

        //metodo para mostrar los productos
        @Get()
        findAll() {
            return this.pcServiceRepo.findAll();
        }

        //metodo para mostrar un producto especifico
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: string) {
                return this.pcServiceRepo.findOne(id);
            } 

        // Para eliminar   
        @Delete(':id')
        remove(@Param('id', ParseUUIDPipe) id: string) {
            return this.pcServiceRepo.remove(id);
        }

        // crear metodo patch, para actualizar 
        @Patch(':id')
        update(
            @Param('id', ParseUUIDPipe) id: string,
            @Body() updatePcDto: CreatePcDto,
        ){
        return this.pcServiceRepo.update(id, updatePcDto);
  }
}
