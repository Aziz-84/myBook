import { Injectable } from '@angular/core';
import {Books} from "../models/book"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks() :Books[] {
    let book =new Books();
    book.id=1;
    book.title="Witcher";
    book.author="Andrzej Sapkowski ";
    book.pages=319;

    return [book];
 
  }
  
}
