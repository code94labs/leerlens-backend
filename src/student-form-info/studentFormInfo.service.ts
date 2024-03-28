import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentFormInfo } from './studentFormInfo.entity';
import { CreateStudentFormInfoDto, UpdateStudentFormInfoDto } from './studentFormInfo.dto';

@Injectable()
export class StudentFormInfoService {
  constructor(
    @InjectRepository(StudentFormInfo)
    private readonly studentFormInfoRepo: Repository<StudentFormInfo>,
  ) {}

  async getAll(): Promise<StudentFormInfo[]> {
    return await this.studentFormInfoRepo.find();
  }

  async getById(id: number): Promise<StudentFormInfo> {
    return await this.studentFormInfoRepo.findOne({ where: { id } });
  }

  async create(createStudentFormDto: CreateStudentFormInfoDto): Promise<StudentFormInfo> {
    const studentInfoItem = this.studentFormInfoRepo.create(createStudentFormDto);

    return await this.studentFormInfoRepo.save(studentInfoItem);
  }

  async createBulk(createBulkStudentFormDto: CreateStudentFormInfoDto[]): Promise<StudentFormInfo[]> {
    return await this.studentFormInfoRepo.save(createBulkStudentFormDto);
  }

  async update(id: number, updateStudentFormInfo: UpdateStudentFormInfoDto): Promise<StudentFormInfo> {
    await this.studentFormInfoRepo.update(id, updateStudentFormInfo);
    
    return await this.studentFormInfoRepo.findOne({ where: { id } });
  }

  async updateBulk(studentFormInfos: StudentFormInfo[]): Promise<StudentFormInfo[]> {
    await Promise.all(studentFormInfos.map(async (studentFormInfo) => {
      await this.studentFormInfoRepo.update(studentFormInfo.id, studentFormInfo);
    }));
    return await this.studentFormInfoRepo.findByIds(studentFormInfos.map(info => info.id));
  }

  async delete(id: string): Promise<void> {
    await this.studentFormInfoRepo.delete(id);
  }

  async deleteBulk(ids: string[]): Promise<void> {
    await this.studentFormInfoRepo.delete(ids);
  }
}
