import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro1';

  loadedFeature= 'recipe';
  onNevigate(data:string){
    this.loadedFeature=data;
    
  }
}
