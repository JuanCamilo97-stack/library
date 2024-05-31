import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './service/books.service';
import { BooksController } from './controllers/books.controller';
import { Book } from './entities.ts/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
  ],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
