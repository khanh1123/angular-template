import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
    FormsModule, // For template-driven forms
    ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterComponent {
Password: String = '';
ConfirmPassword: String = '';
Username: String = '';
Email: String = '';

usernameError: string = '';
emailError: string = '';
passwordError: string = '';
confirmPasswordError: string = '';

onRegister() {
  this.usernameError = '';
  this.emailError = '';
  this.passwordError = '';
  this.confirmPasswordError = '';

  let isValid = true;

        if (!this.Username) {
            this.usernameError = 'Bạn cần điền thông tin vào: Username!';
            isValid = false;
        }
        if (!this.Email) {
            this.emailError = 'Bạn cần điền thông tin vào: Email!';
            isValid = false;
        } else if (!this.Email.includes("@gmail.com")) {
            this.emailError = 'Email phải có định dạng @gmail.com!';
            isValid = false;
        }
        if (!this.Password) {
          this.passwordError = 'Bạn cần điền thông tin vào: Password!';
          isValid = false;
      } else if (this.Password.length < 8) {
          this.passwordError = 'Mật khẩu phải có ít nhất 8 ký tự!';
          isValid = false;
      }else if (!this.ConfirmPassword) {
          this.confirmPasswordError = 'Bạn cần xác nhận lại mật khẩu đã nhập trước đó!'
        }else if (this.Password !== this.ConfirmPassword) {
            this.confirmPasswordError = 'Xác nhận mật khẩu chưa trùng khớp với mật khẩu trước đó!';
            return;
        }else if (isValid) {
          alert(`Username là: ${this.Username}
Email là: ${this.Email}`);
        }
    } 
}