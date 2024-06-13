import { Component } from '@angular/core';
import { LargenewsComponent } from './largenews/largenews.component';
import { SmallnewsComponent } from './smallnews/smallnews.component';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [LargenewsComponent,SmallnewsComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {

}
