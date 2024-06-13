import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LeftComponent, RightComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentComponent {
  items: {image:string} [] = [
    {image:'../../../assets/img/img1.jpg'},
    {image:'../../../assets/img/img2.jpg'},
    {image:'../../../assets/img/img3.jpg'},
    {image:'../../../assets/img/img1.jpg'},
    {image:'../../../assets/img/img3.jpg'},
    {image:'../../../assets/img/img2.jpg'},
    {image:'../../../assets/img/img3.jpg'},
    {image:'../../../assets/img/img1.jpg'},
    {image:'../../../assets/img/img3.jpg'},
    {image:'../../../assets/img/img1.jpg'},
    {image:'../../../assets/img/img2.jpg'},
    {image:'../../../assets/img/img3.jpg'},
    {image:'../../../assets/img/img1.jpg'},
  ]
}
