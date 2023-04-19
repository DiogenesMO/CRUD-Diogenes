import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  last_name: string;

  @Column({ type: 'numeric' })
  phone: number;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'text' })
  gender: string;

  @Column({ type: 'text' })
  identification_card: string;





}
