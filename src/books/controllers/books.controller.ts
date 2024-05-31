/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Param, Body, Post, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './../service/books.service';
import { Book } from './../entities.ts/book.entity';

@Controller('api/books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    async getAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<Book> {
        return this.booksService.findOne(id);
    }

    @Post()
    async create(@Body() bookData: Partial<Book>): Promise<Book> {
        return this.booksService.create(bookData);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<Book>): Promise<Book> {
        return this.booksService.update(id, updateData);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
        return this.booksService.remove(id);
    }
}
