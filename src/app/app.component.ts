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

  // Sample data. In a real-world scenario, you'd probably fetch this from an API or service.
  allBooks: any[] = (bookData as any).default;
  books: any[] = this.allBooks.filter(allBooks => allBooks.amount !== "0");
  searchResults: any[] = this.books;

  searchBooks() {
    this.searchResults = this.books.filter(book =>
      book.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
