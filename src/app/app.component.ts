import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      this.blnMmShow = false;
      window.scroll(0,0);
  });
  }

  blnNarrow = false;
  blnMmShow = false;

  onActivate(event) {
    window.scroll(0,0);    
    if(this.isMobileDevice()) this.blnNarrow = true;
  }

  onScroll($event){    
    document.scrollingElement.scrollTop >= 100 || this.isMobileDevice()? this.blnNarrow = true : this.blnNarrow = false;
    
  }

  onMobileNav(){    
    console.log("yeah")
    this.blnMmShow = !this.blnMmShow;    
  }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

}
