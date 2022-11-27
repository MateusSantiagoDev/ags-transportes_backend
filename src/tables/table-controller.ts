import { Controller, Get, Post } from "@nestjs/common";
import { TableService } from "./table-service";

@Controller()
export class TableController {
    constructor(private readonly tableService: TableService) {}

    @Get()
    findAll() {
        return this.tableService.findAll()
    }

    @Post()
    create() {
        return this.tableService.create()
    }
}