import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'leerlens',
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
  controllers: [AppController, UserController, QuestionnaireController],
  providers: [AppService, UserService, QuestionnaireService],
})
export class AppModule {}
