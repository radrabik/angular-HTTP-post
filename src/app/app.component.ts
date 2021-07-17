import { Component, VERSION } from '@angular/core';
import { BackendService} from './services/backend.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private backendService: BackendService) {}

  postData() {
    this.backendService.postAPI()
    .subscribe( ( response: any) => {
        console.log(response);
    })
  }
}
