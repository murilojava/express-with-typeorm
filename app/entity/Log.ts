import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length })
  action: string;

  @CreateDateColumn()
  dataCriacao: Date;
}
