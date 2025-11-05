import { Entity, Column } from 'typeorm';

@Entity()
export class User {
  @Column({primary: true, generated: 'uuid'})
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
