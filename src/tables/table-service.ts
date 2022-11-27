import { Injectable } from '@nestjs/common';
import { createDto } from 'src/dto/create-table.dto';
import { Entity } from 'src/entities/table-entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Entity[]> {
    return this.prisma.table.findMany();
  }

  create(data: createDto): Promise<Entity> {
    return this.prisma.table.create({ data });
  }
}
