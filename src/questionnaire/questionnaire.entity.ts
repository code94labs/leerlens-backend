import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/* This table contains all the question structure for the  4 forms */

@Entity()
export class PreIntervention {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  questionText: string;

  @Column({ nullable: false })
  positionOrderId: number;

  /* The question field type will be in Scale */
  @Column({ default: 1 })
  minValue: number;

  @Column({ default: 6 })
  maxValue: number;

  /* We will perform a soft delete here */
  @Column({ default: false })
  isDelete: boolean;
}

@Entity()
export class PostIntervention {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  questionText: string;

  @Column({ nullable: false })
  positionOrderId: number;

  /* The question field type will be in Scale */
  @Column({ default: 1 })
  minValue: number;

  @Column({ default: 6 })
  maxValue: number;

  /* We will perform a soft delete here */
  @Column({ default: false })
  isDelete: boolean;
}

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  questionText: string;

  @Column({ nullable: false })
  positionOrderId: number;

  /* The question field type will be in Scale */
  @Column({ default: 1 })
  minValue: number;

  @Column({ default: 6 })
  maxValue: number;

  /* We will perform a soft delete here */
  @Column({ default: false })
  isDelete: boolean;
}

@Entity()
export class Normgroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  questionText: string;

  @Column({ nullable: false })
  positionOrderId: number;

  /* The question field type will be in Scale */
  @Column({ default: 1 })
  minValue: number;

  @Column({ default: 6 })
  maxValue: number;

  /* We will perform a soft delete here */
  @Column({ default: false })
  isDelete: boolean;
}
