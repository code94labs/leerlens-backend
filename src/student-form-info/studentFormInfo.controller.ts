import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentFormInfoService } from './studentFormInfo.service';
import { StudentFormInfo } from './studentFormInfo.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateStudentFormInfoDto } from './studentFormInfo.dto';
import { UpdateEvaluationDto } from 'src/questionnaire/questionnaire.dto';

@ApiTags('Student Form Info')
@Controller('studentFormInfo')
export class StudentFormInfoController {
  constructor(
    private readonly studentFormInfoService: StudentFormInfoService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all student form list' })
  async getAll(): Promise<StudentFormInfo[]> {
    return this.studentFormInfoService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get student form by ID' })
  async getById(@Param('id') id: number): Promise<StudentFormInfo> {
    return this.studentFormInfoService.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new student form item' })
  @ApiResponse({
    status: 201,
    description: 'The student form has been successfully created.',
  })
  async create(
    @Body() createStudentFormDto: CreateStudentFormInfoDto,
  ): Promise<StudentFormInfo> {
    return this.studentFormInfoService.create(createStudentFormDto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Create a new student form item in bulk' })
  @ApiResponse({
    status: 201,
    description: 'Bulk student form has been successfully created.',
  })
  async createBulk(
    @Body() createBulkStudentFormDto: CreateStudentFormInfoDto[],
  ): Promise<StudentFormInfo[]> {
    return this.studentFormInfoService.createBulk(createBulkStudentFormDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing student form item' })
  @ApiResponse({
    status: 200,
    description: 'The student form item has been successfully updated.',
  })
  async update(
    @Param('id') id: number,
    @Body() updateStudentFormDto: UpdateEvaluationDto,
  ): Promise<StudentFormInfo> {
    return this.studentFormInfoService.update(id, updateStudentFormDto);
  }

  // @Put('bulk')
  // async updateBulk(
  //   @Body() studentFormInfos: StudentFormInfo[],
  // ): Promise<StudentFormInfo[]> {
  //   return this.studentFormInfoService.updateBulk(studentFormInfos);
  // }

  @ApiOperation({ summary: 'Delete a student form item' })
  @ApiResponse({
    status: 200,
    description: 'The student form item has been successfully deleted.',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.studentFormInfoService.delete(id);
  }
}
