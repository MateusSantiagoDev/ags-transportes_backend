import { Body, Controller, Get, Post } from '@nestjs/common';
import { createDto } from 'src/dto/create-table.dto';
import { Entity } from 'src/entities/table-entity';
import { TableService } from './table-service';
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Table")
@Controller()
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: "Vizualizar todos os clientes"
  })
  findAll(): Promise<Entity[]> {
    try {
      return this.tableService.findAll();
    } catch (err) {
      console.log(err.message);
    }
  }

  @Post()
  @ApiOperation({
    summary: "Adicionar um novo cliente"
  })
  create(@Body() dto: createDto): Promise<Entity> {
    try {
      return this.tableService.create(dto);
    } catch (err) {
      console.log(err.message);
    }
  }
}
