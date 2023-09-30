import { Component } from '@angular/core';
import * as bookData from "../assets/books.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookLocator';
  searchTerm: string = '';
  searchResults: any[] = [];

  // Sample data. In a real-world scenario, you'd probably fetch this from an API or service.
  books: any[] = (bookData as any).default;

  searchBooks() {
    console.log('liel ');

    console.log(this.books);

    this.searchResults = this.books.filter(book =>
      book.bookname.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
