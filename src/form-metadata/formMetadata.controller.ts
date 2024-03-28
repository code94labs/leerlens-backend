// import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
// import { FormMetadata } from './formMetadata.entity';

// @ApiTags("Form Metadata")
// @Controller('form-metadata')
// export class FormMetadataController {
//   constructor(private readonly formMetadataService: FormMetadataService) {}

//   @Get()
//   async getAll(): Promise<FormMetadata[]> {
//     return this.formMetadataService.getAll();
//   }

//   @Get(':id')
//   async getById(@Param('id') id: string): Promise<FormMetadata> {
//     return this.formMetadataService.getById(id);
//   }

//   @Post()
//   async create(@Body() formMetadata: FormMetadata): Promise<FormMetadata> {
//     return this.formMetadataService.create(formMetadata);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() formMetadata: FormMetadata): Promise<FormMetadata> {
//     return this.formMetadataService.update(id, formMetadata);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string): Promise<void> {
//     return this.formMetadataService.delete(id);
//   }
// }
