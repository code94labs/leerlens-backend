import { UserRole } from 'src/utils/enums';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/* These are user admin details */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profileImage: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  contactNumber: string;

  @Column({ default: UserRole.Admin })
  role: UserRole;

  /* We will perform a soft delete here */
  @Column()
  isDelete: boolean;
}
