import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  // template: `<h3>Hello Ivaan Vijay Bangaru. This is programming Angular!</h3>
  //             <img src="/assets/images/basic-shield.png" />
  //           `
  template: '<events-list></events-list>'
            
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
