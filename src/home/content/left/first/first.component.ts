import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  @Input() selectedImage: { title: string; image: string; id: number } = {
    image: '',
    id: 0,
    title: '',
  };
  @Input() items: Array<{ title: string; image: string; id: number }> = [];

  @Output() getCurrentImage = new EventEmitter();

  changeImage(item: { image: string; title: string; id: number }) {
    console.log('item', item);
    
    this.getCurrentImage.emit(item);
    // this.selectedImage.src = item.image;
    // this.selectedImage.text = item.title;
  }

  handleRedirectDetail(item: { image: string; title: string; id: number }) {
    console.log(item);
    
  }
}
