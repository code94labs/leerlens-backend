import { FormEvaluation } from 'src/utils/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  /* This column will be present for the SectionTypes */
  @Column()
  personalDetailsQH: string;

  @Column()
  questionnairePartOneH: string;

  @Column()
  questionnairePartOneDes: string;

  @Column()
  questionnairePartTwoH: string;

  @Column()
  questionnairePartTwoDes: string;

  /* QH = Question heading */
  @Column()
  programAndSupervisorQH: string;

  /* QSH = Question sub heading */
  @Column()
  ProgramAndSupervisorQSH: string;

  /* Des = Description */
  @Column()
  ProgramAndSupervisorDes: string;

  @Column()
  finalQH: string;

  /* The 4 forms could have 4 different inputs*/
  @Column({ nullable: false })
  formType: FormEvaluation;
}
