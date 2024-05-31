/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Param,Body, Post, Put, Delete } from '@nestjs/common';

@Controller('api/books')
export class BooksController {

    @Get()
    getAll(){
        return ['This is a list of all books'];
    }

    @Get(':id')
    getOne(@Param('id')id:number){
        return id
    }

    @Post(':id')
    create(@Body()body:any){
        return body
    }

    @Put(':id')
    update(@Param('id')id:number, @Body()body:any){
        return body
        }

    @Delete(':id')
    delete(@Param('id') id:number){
        return true
    }
}
