import { Body, Controller, Get, Post } from '@nestjs/common';
import { createDto } from 'src/dto/create-table.dto';
import { Entity } from 'src/entities/table-entity';
import { TableService } from './table-service';

@Controller()
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  findAll(): Promise<Entity[]> {
    try {
      return this.tableService.findAll();
    } catch (err) {
      console.log(err.message);
    }
  }

  @Post()
  create(@Body() dto: createDto): Promise<Entity> {
    try {
      return this.tableService.create(dto);
    } catch (err) {
      console.log(err.message);
    }
  }
}
