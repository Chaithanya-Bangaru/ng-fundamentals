import { Component } from '@angular/core';
import { splitMatchedQueriesDsl } from '@angular/core/src/view/util';

@Component({
    selector: 'events-list',
    template: ` <div> <h1>Upcoming Angular Technology Events</h1>
        <hr>        
        <event-thumbnail [event] = "event1" #thumbnail >
        </event-thumbnail>      
        <h4>{{thumbnail.someProperty}}</h4>
        <button class="btn btn-primary" (click) = thumbnail.thumbnailChildComponentMethod()>Log me foo</button>        
        
        </div>`
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular Konnect',
        date: '6/25/2020',
        time: '9:30 AM',
        price: 499.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Bristol',
            country: 'Great Britain'
        }
    }

    // eventClickHandler(data){
    //     console.log('received' +data);
    // }

}