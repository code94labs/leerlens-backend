import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PreIntervention, PostIntervention, Normgroup, Evaluation } from './questionnaire.entity';
import { QuestionnaireService } from './questionnaire.service';

@Controller('questionnaire')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Get('/pre-intervention')
  async getAllPreInterventionQuestions(): Promise<PreIntervention[]> {
    return this.questionnaireService.getAllPreInterventionQuestions();
  }

  @Get('/post-intervention')
  async getAllPostInterventionQuestions(): Promise<PostIntervention[]> {
    return this.questionnaireService.getAllPostInterventionQuestions();
  }

  @Get('/evaluation')
  async getAllEvaluationQuestions(): Promise<Evaluation[]> {
    return this.questionnaireService.getAllEvaluationQuestions();
  }

  @Get('/normgroup')
  async getAllNormgroupQuestions(): Promise<Normgroup[]> {
    return this.questionnaireService.getAllNormgroupQuestions();
  }

//   @Post('/pre-intervention')
//   async createPreInterventionQuestion(@Body() question: PreIntervention): Promise<PreIntervention> {
//     return this.questionnaireService.createPreInterventionQuestion(question);
//   }

//   @Post('/post-intervention')
//   async createPostInterventionQuestion(@Body() question: PostIntervention): Promise<PostIntervention> {
//     return this.questionnaireService.createPostInterventionQuestion(question);
//   }

//   @Post('/evaluation')
//   async createEvaluationQuestion(@Body() question: Evaluation): Promise<Evaluation> {
//     return this.questionnaireService.createEvaluationQuestion(question);
//   }
}
