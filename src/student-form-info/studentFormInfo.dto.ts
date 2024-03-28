import { ApiProperty } from '@nestjs/swagger';
import { FieldType, FormEvaluation, SectionType } from 'src/utils/enums';

export class CreateStudentFormInfoDto {
  @ApiProperty({
    example: FormEvaluation.Evaluation,
    description: 'Type of form pre intervention',
    enum: FormEvaluation,
  })
  formType: FormEvaluation;

  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText: string;

  @ApiProperty({
    example: FieldType.DropDown,
    description: 'Type of field for the question',
    enum: FieldType,
  })
  fieldType: FieldType;

  @ApiProperty({
    example: SectionType.PersonalDetails,
    description: 'Type of section for the question',
    enum: SectionType,
  })
  sectionType: SectionType;

  @ApiProperty({
    example: 1,
    description: 'Position order ID of the question',
  })
  positionOrderId: number;

  @ApiProperty({
    example: [
      {
        id: 1,
        item: 'Option 1',
        isDelete: false,
      },
      {
        id: 2,
        item: 'Option 2',
        isDelete: false,
      },
    ],
    description: 'Options for dropdown type',
  })
  dropdownOptions?: {
    id: number;
    item: string;
    isDelete: boolean;
  }[];

  @ApiProperty({
    example: 1,
    description: 'Minimum value for the scale',
  })
  minValue?: number;

  @ApiProperty({
    example: 6,
    description: 'Maximum value for the scale',
  })
  maxValue?: number;
}

export class UpdateStudentFormInfoDto {
  @ApiProperty({
    example: FormEvaluation.PreInterventions,
    description: 'Type of form evaluation',
    enum: FormEvaluation,
  })
  formType?: FormEvaluation;

  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText?: string;

  @ApiProperty({
    example: FieldType.DropDown,
    description: 'Type of field for the question',
    enum: FieldType,
  })
  fieldType?: FieldType;

  @ApiProperty({
    example: SectionType.PersonalDetails,
    enum: SectionType,
    description: 'Type of section for the question',
  })
  sectionType?: SectionType;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId?: number;

  @ApiProperty({
    example: [
      {
        id: 1,
        item: 'Option 1',
        isDelete: false,
      },
    ],
    description: 'Options for dropdown type',
  })
  dropdownOptions?: {
    id: number;
    item: string;
    isDelete: boolean;
  }[];

  @ApiProperty({
    example: 1,
    description: 'Minimum value for the scale',
  })
  minValue?: number;

  @ApiProperty({
    example: 6,
    description: 'Maximum value for the scale',
  })
  maxValue?: number;
}
