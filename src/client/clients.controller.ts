import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Delete, Patch } from "@nestjs/common";
import { ClientService } from "./clients.service";
import { CreateClientDto } from "./dto/clients.dto";

@Controller('clientes')
export class ClientController {
    constructor (
        private readonly clientServiceRepo: ClientService) {}

        //metodo para crear un producto
        @Post()
        create(@Body() clientdto: CreateClientDto) {
            return this.clientServiceRepo.create(clientdto)
        }

        //metodo para mostrar los productos
        @Get()
        findAll() {
            return this.clientServiceRepo.findAll();
        }

        //metodo para mostrar un producto especifico
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: string) {
                return this.clientServiceRepo.findOne(id);
            } 

        // Para eliminar   
        @Delete(':id')
        remove(@Param('id', ParseUUIDPipe) id: string) {
            return this.clientServiceRepo.remove(id);
        }

        // crear metodo patch, para actualizar 
        @Patch(':id')
        update(
            @Param('id', ParseUUIDPipe) id: string,
            @Body() updateClientDto: CreateClientDto,
        ){
        return this.clientServiceRepo.update(id, updateClientDto);
  }
}
