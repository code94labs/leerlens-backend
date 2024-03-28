import { ApiProperty } from '@nestjs/swagger';

export class CreatePreInterventionDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection: number;
}

export class UpdatePreInterventionDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText?: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId?: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue?: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue?: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete?: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId?: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection?: number;
}

export class CreatePostInterventionDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection: number;
}

export class UpdatePostInterventionDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText?: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId?: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue?: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue?: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete?: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId?: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection?: number;
}

export class CreateEvaluationDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection: number;
}

export class UpdateEvaluationDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText?: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId?: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue?: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue?: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete?: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId?: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection?: number;
}

export class CreateNormgroupDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection: number;
}

export class UpdateNormgroupDto {
  @ApiProperty({
    example: 'Question text',
    description: 'The text of the question',
  })
  questionText?: string;

  @ApiProperty({ example: 1, description: 'Position order ID of the question' })
  positionOrderId?: number;

  @ApiProperty({ example: 1, description: 'Minimum value for the scale' })
  minValue?: number;

  @ApiProperty({ example: 6, description: 'Maximum value for the scale' })
  maxValue?: number;

  @ApiProperty({
    example: false,
    description: 'Soft delete status of the question',
  })
  isDelete?: boolean;

  @ApiProperty({ example: 1, description: 'ID of the question set' })
  questionSetId?: number;

  @ApiProperty({ example: 1, description: 'Section of the question' })
  questionSection?: number;
}
