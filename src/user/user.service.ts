import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
    try {
      let user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        return null;
      }

      // Update user data with the provided userData
      Object.assign(user, userData);

      user = await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
