import { Component,CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SecondComponent {
  @Input() maxSlider: number = 3
items: {image: string, title: string}[] = [
  {image:'../../../../assets/img/img1.jpg', title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur saepe aperiam autem adipisci voluptates, incidunt quisquam maiores possimus perferendis. Sit vel facilis, quo quaerat rem amet harum, quibusdam natus dicta, incidunt dolorum ipsa. Laudantium officia suscipit accusantium quos, ex totam minima praesentium nobis, illo fuga corporis id aliquam. Dignissimos.'},
  {image:'../../../../assets/img/img2.jpg', title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur saepe aperiam autem adipisci voluptates, incidunt quisquam maiores possimus perferendis. Sit vel facilis, quo quaerat rem amet harum, quibusdam natus dicta, incidunt dolorum ipsa. Laudantium officia suscipit accusantium quos, ex totam minima praesentium nobis, illo fuga corporis id aliquam. Dignissimos.'},
  {image:'../../../../assets/img/img3.jpg', title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur saepe aperiam autem adipisci voluptates, incidunt quisquam maiores possimus perferendis. Sit vel facilis, quo quaerat rem amet harum, quibusdam natus dicta, incidunt dolorum ipsa. Laudantium officia suscipit accusantium quos, ex totam minima praesentium nobis, illo fuga corporis id aliquam. Dignissimos.'},
  {image:'../../../../assets/img/img2.jpg', title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur saepe aperiam autem adipisci voluptates, incidunt quisquam maiores possimus perferendis. Sit vel facilis, quo quaerat rem amet harum, quibusdam natus dicta, incidunt dolorum ipsa. Laudantium officia suscipit accusantium quos, ex totam minima praesentium nobis, illo fuga corporis id aliquam. Dignissimos.'},
  {image:'../../../../assets/img/img1.jpg', title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur saepe aperiam autem adipisci voluptates, incidunt quisquam maiores possimus perferendis. Sit vel facilis, quo quaerat rem amet harum, quibusdam natus dicta, incidunt dolorum ipsa. Laudantium officia suscipit accusantium quos, ex totam minima praesentium nobis, illo fuga corporis id aliquam. Dignissimos.'},
  {image:'../../../../assets/img/img3.jpg', title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur saepe aperiam autem adipisci voluptates, incidunt quisquam maiores possimus perferendis. Sit vel facilis, quo quaerat rem amet harum, quibusdam natus dicta, incidunt dolorum ipsa. Laudantium officia suscipit accusantium quos, ex totam minima praesentium nobis, illo fuga corporis id aliquam. Dignissimos.'},
  {image:'../../../../assets/img/img1.jpg', title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur saepe aperiam autem adipisci voluptates, incidunt quisquam maiores possimus perferendis. Sit vel facilis, quo quaerat rem amet harum, quibusdam natus dicta, incidunt dolorum ipsa. Laudantium officia suscipit accusantium quos, ex totam minima praesentium nobis, illo fuga corporis id aliquam. Dignissimos.'},
];
}

