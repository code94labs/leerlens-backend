import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/utils/enums';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@example.com',
    description: 'Email address of the user',
  })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Password of the user',
  })
  password: string;

  @ApiProperty({
    example: 'John',
    description: 'First name of the user',
  })
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the user',
  })
  lastName: string;

  @ApiProperty({
    example: '+123456789',
    description: 'Contact number of the user',
  })
  contactNumber: string;

  @ApiProperty({
    example: UserRole.Admin,
    description: 'Role of the user',
    enum: UserRole,
  })
  role: UserRole;
}

export class UpdateUserDto {
  @ApiProperty({
    example: 'example@example.com',
    description: 'Email address of the user',
  })
  email?: string;

  @ApiProperty({ example: 'password123', description: 'Password of the user' })
  password?: string;

  @ApiProperty({ example: 'John', description: 'First name of the user' })
  firstName?: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
  lastName?: string;

  @ApiProperty({
    example: '+123456789',
    description: 'Contact number of the user',
  })
  contactNumber?: string;

  @ApiProperty({
    example: UserRole.Admin,
    description: 'Role of the user',
    enum: UserRole,
  })
  role?: UserRole;
}
