import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:scroll)':'onScroll($event)'
  }
})
export class AppComponent {
  title = 'hyperion';

  blnNarrow = false;

  onActivate(event) {
    window.scroll(0,0);    
  }

  onScroll($event){    
    document.scrollingElement.scrollTop >= 100? this.blnNarrow = true : this.blnNarrow = false;
  }

}
