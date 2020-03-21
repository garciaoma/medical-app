import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";

@Component({
  selector: 'AppLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id
})
export class LoginComponent {
  isLoggingIn = true;
  processing = false;
  user: any;
  @ViewChild("password", {static: false}) password: ElementRef;
  @ViewChild("confirmPassword", {static: false}) confirmPassword: ElementRef;

  constructor(private page: Page, 
    private router: Router) {
      this.page.actionBarHidden = true;
  }

  toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    this.router.navigate(["/home"]);
  }

  login() {
    
  }

  register() {
  }

  signUp() {
    this.router.navigate(["/signUp"]);
  }

  focusPassword() {

  }
  focusConfirmPassword() {

  }

  alert(message: string) {
      return alert({
          title: "APP NAME",
          okButtonText: "OK",
          message: message
      });
  }
}
