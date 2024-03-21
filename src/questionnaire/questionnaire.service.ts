import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation, Normgroup, PostIntervention, PreIntervention } from './questionnaire.entity';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectRepository(PreIntervention)
    private readonly preInterventionRepo: Repository<PreIntervention>,

    @InjectRepository(PostIntervention)
    private readonly postInterventionRepo: Repository<PostIntervention>,

    @InjectRepository(Evaluation)
    private readonly evaluationRepo: Repository<Evaluation>,
    
    @InjectRepository(Normgroup)
    private readonly normgroupRepo: Repository<Normgroup>,
  ) {}

  async getAllPreInterventionQuestions(): Promise<PreIntervention[]> {
    return await this.preInterventionRepo.find();
  }

  async getAllPostInterventionQuestions(): Promise<PostIntervention[]> {
    return await this.postInterventionRepo.find();
  }

  async getAllEvaluationQuestions(): Promise<Evaluation[]> {
    return await this.evaluationRepo.find();
  }

  async getAllNormgroupQuestions(): Promise<Normgroup[]> {
    return await this.normgroupRepo.find();
  }
}
