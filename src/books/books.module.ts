import { Module } from '@nestjs/common';
import { BooksService } from './service/books.service';
import { BooksController } from './controllers/books.controller';

@Module({
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
