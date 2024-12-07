import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'Dr. Vinayak';

  name:string="Dr. Vinayak Kalasada";
  qualification:string="BUMS, Md";
  phoneNum:string="+91 6360691445";

  imageCollegeLogo:string="../assets/NIUMLogo.jpeg";
  
  imagePhoneLogo:string="../assets/PhoneIcon.png";

}
