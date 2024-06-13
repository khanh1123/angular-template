import { Component } from '@angular/core';
import { FirstsbComponent } from './firstsb/firstsb.component';
import { SecondsbComponent } from './secondsb/secondsb.component';
import { ThirdsbComponent } from './thirdsb/thirdsb.component';
import { FourthsbComponent } from './fourthsb/fourthsb.component';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [FirstsbComponent,SecondsbComponent,ThirdsbComponent,FourthsbComponent],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {

}
