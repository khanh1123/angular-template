import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RightComponent } from "../content/right/right.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-chitiet',
    standalone: true,
    templateUrl: './chitiet.component.html',
    styleUrl: './chitiet.component.css',
    imports: [HeaderComponent, RightComponent, FooterComponent]
})
export class ChitietComponent {

}
