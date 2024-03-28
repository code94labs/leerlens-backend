import { FieldType, FormEvaluation, SectionType } from 'src/utils/enums';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentFormInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  formType: FormEvaluation;

  @Column({ nullable: false })
  questionText: string;

  @Column({ nullable: false })
  fieldType: FieldType;

  @Column({ nullable: false })
  sectionType: SectionType;

  /* positionOrderId is newly assigned for each section for SectionType and QuestionSection (1 & 2)*/
  @Column({ nullable: false })
  positionOrderId: number;

  /* IF the FieldType <- Dropdown */
  @Column({ type: 'json', nullable: true })
  dropdownOptions: { id: number; item: string; isDelete: boolean }[];

  /* IF the FieldType <- Scale */
  @Column({ default: 1 })
  minValue: number;

  @Column({ default: 6 })
  maxValue: number;
}

// The sectionType & formType will be considered for filtration.
