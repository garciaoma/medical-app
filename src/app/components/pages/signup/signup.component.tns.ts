import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  moduleId: module.id
})
export class SignupComponent implements OnInit {
  isLoggingIn = true;
  processing = false;
  user: any;
  @ViewChild("password", { static: false }) password: ElementRef;
  @ViewChild("confirmPassword", { static: false }) confirmPassword: ElementRef;

  constructor(private page: Page, private router: Router) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    this.router.navigate(["/home"]);
  }

  login() {}

  register() {}

  focusPassword() {}
  focusConfirmPassword() {}

  alert(message: string) {
    return alert({
      title: "APP NAME",
      okButtonText: "OK",
      message: message
    });
  }
}
