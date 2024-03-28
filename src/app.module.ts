import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { StudentFormInfo } from './student-form-info/studentFormInfo.entity';
import { StudentResponse } from './responses/responses.entity';
import { FormMetadata } from './form-metadata/formMetadata.entity';
import {
  Evaluation,
  Normgroup,
  PostIntervention,
  PreIntervention,
} from './questionnaire/questionnaire.entity';
import { QuestionnaireController } from './questionnaire/questionnaire.controller';
import { QuestionnaireService } from './questionnaire/questionnaire.service';
import { StudentFormInfoController } from './student-form-info/studentFormInfo.controller';
import { StudentFormInfoService } from './student-form-info/studentFormInfo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'leerlens-nazhimkalam-4ea7.a.aivencloud.com',
      port: 26947,
      username: 'avnadmin',
      password: 'AVNS_f_KNE2ht_3vKwAn90F3',
      database: 'defaultdb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      StudentFormInfo,
      StudentResponse,
      FormMetadata,
      PreIntervention,
      PostIntervention,
      Evaluation,
      Normgroup,
    ]),
  ],
  controllers: [
    UserController,
    QuestionnaireController,
    StudentFormInfoController,
  ],
  providers: [
    UserService,
    QuestionnaireService,
    StudentFormInfoService,
  ],
})
export class AppModule {}
