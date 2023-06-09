import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.css']
})
export class LayoutClientComponent {
  constructor(private authService: AuthService) { }
  logout() {
    this.authService.logout();
    // Thực hiện các thao tác khác sau khi đăng xuất thành công, ví dụ như chuyển hướng đến trang đăng nhập, vv.
  }
}
