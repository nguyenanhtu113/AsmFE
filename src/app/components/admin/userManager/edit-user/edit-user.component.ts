import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user!: IUser;
  userForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    role: 1
  })
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private back: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get("id");
      this.userService.getOneUser(id).subscribe(user => {
        this.user = user;

        this.userForm.patchValue({
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        })
      })
    })
  }
  onHandleEdit() {
    if (this.userForm.valid) {
      const user: IUser = {
        id: this.user.id,
        name: this.userForm.value.name || "",
        email: this.userForm.value.email || "",
        password: this.userForm.value.password || "",
        role: this.userForm.value.role || 0,
      }
      this.userService.updateUser(user).subscribe((data) => {
        this.back.navigate(["admin", "user"])
      })
    }
  }
}
