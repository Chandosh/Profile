import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imageEditor';
  imageLocation = 'http://www.auto-power-girl.com/high-resolution-wallpapers/audi-a3-cabriolet/audi-a3-cabriolet-2008-14.jpg';

  save($event) {
  }
  cancel() {
  }
}
