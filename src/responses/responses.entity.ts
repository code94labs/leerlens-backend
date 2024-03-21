import { FormEvaluation } from 'src/utils/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  formType: FormEvaluation;

  @Column({ type: 'json', nullable: true })
  responses: { questionnaireId: number; answerScale: number }[];

  @Column({ type: 'json', nullable: true })
  studentDetails: { questionId: number; answer: string }[];
}
