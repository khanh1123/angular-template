import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {
UN: string = '';
PW: string = '';

UNError: string = '';
PWError: string = '';

onLogin() {
this.UNError = '';
this.PWError = '';

  let isValid = true;

        if (!this.UN) {
            this.UNError = 'Bạn cần điền thông tin vào: Tên đăng nhập!';
            isValid = false;
        }
        if (!this.PW) {
          this.PWError = 'Bạn cần điền thông tin vào: Mật khẩu!';
          isValid = false;
      }
}
}
