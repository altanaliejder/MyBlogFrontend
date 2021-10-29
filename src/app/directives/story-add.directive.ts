import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appStoryAdd]',

})
export class StoryAddDirective implements OnInit {
  routeName = '';

  constructor(private el: ElementRef, private route: Router) {

  }
  ngOnInit(): void {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routeName = this.route.url.slice(1);
        if (this.routeName === 'story/addstory') {
          this.el.nativeElement.style.display = "none";
        }
      }
    })
  }
}
