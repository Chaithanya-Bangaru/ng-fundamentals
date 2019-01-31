import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.country}}</span>
            </div>            
        </div>
    `
})
export class EventThumbnailComponent {
    // means, this will be input from somewhere outside, here it will be sent from Events List component
    @Input() event: any;
    //@Output() eventClick : new EventEmitter<any>('Foo to Parent');
    @Output() eventClick = new EventEmitter();
    someProperty: String = "Angular component communication can happen thru 3 ways 1. EventEmitter 2. @Input, @Output properties 3. Template variables";
    // clickHandler(){
    //     console.log("Child component Clicked!")
    //     this.eventClick.emit('Emitting Hello from Child component')
    // }
    thumbnailChildComponentMethod(){ // public method of child component
        console.log('invoke thumbnailChildComponentMethod')
    }
}