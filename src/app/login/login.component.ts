import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  confirmToOpenInNewTab() {
    const openInNewTab = confirm("Do you want open this in new tab");
    if(openInNewTab){
      window.open("https://www.angular.io", '_blank');
    } else {
      alert('user dont want to open this link in new page');
    }
  }

  confirmToOpenCurrentPageInNewTab(){
    const openCurrentPageInNewTab:any = confirm("Do you want open this page in new tab");
    if(openCurrentPageInNewTab){
      window.open("_blank");
    } else {
      alert("user dont want to open this page in new page");
    }
  }
}
