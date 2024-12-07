import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'Dr. Vinayak';

  name:string="Dr. Vinayak Kalasada";
  qualification:string="BUMS";
  phoneNum:string="6360691445";

  imagePath:string="../assets/CollegeLogo.jpeg";

}
