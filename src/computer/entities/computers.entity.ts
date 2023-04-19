import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Computer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  brand: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'text' })
  ram: string;

  @Column({ type: 'text' })
  procesador: string;

  @Column({ type: 'text' })
  Disco_duro: string;

  @Column({ type: 'text' })
  grafica: string;
}

