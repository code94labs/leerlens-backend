import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PreIntervention, PostIntervention, Normgroup, Evaluation } from './questionnaire.entity';
import { QuestionnaireService } from './questionnaire.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Questionnaire")
@Controller('questionnaire')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Get('/pre-intervention')
  @ApiOperation({ summary: 'Get all pre-intervention questions' })
  async getAllPreInterventionQuestions(): Promise<PreIntervention[]> {
    return this.questionnaireService.getAllPreInterventionQuestions();
  }

  @Get('/post-intervention')
  @ApiOperation({ summary: 'Get all post-intervention questions' })
  async getAllPostInterventionQuestions(): Promise<PostIntervention[]> {
    return this.questionnaireService.getAllPostInterventionQuestions();
  }

  @Get('/evaluation')
  @ApiOperation({ summary: 'Get all evaluation questions' })
  async getAllEvaluationQuestions(): Promise<Evaluation[]> {
    return this.questionnaireService.getAllEvaluationQuestions();
  }

  @Get('/normgroup')
  @ApiOperation({ summary: 'Get all the normgroup questions' })
  async getAllNormgroupQuestions(): Promise<Normgroup[]> {
    return this.questionnaireService.getAllNormgroupQuestions();
  }
}
