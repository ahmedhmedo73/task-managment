import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('My Awesome Angular 17 SSR App');
    meta.addTags([
      { name: 'og:title', content: 'My Awesome Angular 17 SSR App' },
      { name: 'og:description', content: 'A detailed description of my Angular 17 SSR app content.' },
      { name: 'og:image', content: 'https://example.com/my-image.jpg' },
    ]);
  }
}
