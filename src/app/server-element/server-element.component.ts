import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None --> to make styles of this component globaly
})
export class ServerElementComponent implements OnInit , 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, OnDestroy{
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    //this is called whenever a Change occure in Angular
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    //this is called whenever Angular checks for any Changes
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    //this is called only ones. It is called wenn the Content is finally initialised
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    //this is called whenever Angular checks the content for the last time
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    //this is called oafter the content has been checked
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    //this is called oafter the content has been checked
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
