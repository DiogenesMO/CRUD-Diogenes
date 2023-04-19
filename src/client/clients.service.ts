import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/clients.dto';
import { Client } from './entities/clients.entity';


@Injectable()
export class ClientService{
    constructor (
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>,
        ) {}

        //metodo para agregar producto 

        async create(clientdto: CreateClientDto) {
            const client = this.clientRepository.create(clientdto);
            await this.clientRepository.save(client)

            return client;
        }

        //Metodo para visualizar todos los productos 
        findAll() {
            return this.clientRepository.find();
        }

        //metodo para visualizar un producto especifico
        findOne(id: string) {
            return this.clientRepository.findOneBy({ id}); 
        }

        //remover un producto especifico
        async remove(id: string) {
            const client = await this.findOne(id);
            await this.clientRepository.remove(client);
            return 'cliente eliminado sastifactoriamante';
        }

        //actualizar un producto especifico
        async update(id: string, cambios: CreateClientDto) {
            const findClient = await this.findOne(id); 
            const updatedClient = await this.clientRepository.merge(
                findClient,
                cambios,
            );

            return this.clientRepository.update(id, updatedClient);
        }

       
}