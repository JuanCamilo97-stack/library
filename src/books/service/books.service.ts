import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './../entities.ts/book.entity';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private booksRepo: Repository<Book>
    ){}

    findAll() {
        return this.booksRepo.find();
    }

    async findOne(id: number) {
        return this.booksRepo.findOne({ where: { id } });
    }

    async create(bookData: Partial<Book>) {
        const newBook = this.booksRepo.create(bookData);
        return this.booksRepo.save(newBook);
    }

    async update(id: number, updateData: Partial<Book>) {
        await this.booksRepo.update(id, updateData);
        return this.booksRepo.findOne({ where: { id } });
    }

    async remove(id: number) {
        const book = await this.booksRepo.findOne({ where: { id } });
        if (book) {
            await this.booksRepo.remove(book);
            return true;
        }
        return false;
    }
}
