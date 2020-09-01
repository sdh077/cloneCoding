import { Component, OnInit } from '@angular/core';
import { Inject, HostListener } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-buzzni',
  templateUrl: './buzzni.component.html',
  styleUrls: ['./buzzni.component.css']
})
export class BuzzniComponent implements OnInit {
  public fixed = false;

  constructor(@Inject(DOCUMENT) private doc: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
     if ( window.scrollY > 10 ) {
         this.fixed = true;
     } else if (this.fixed && window.scrollY < 5) {
         this.fixed = false;
     }
     console.log(window.scrollY);
  }
  ngOnInit() {
  }
  leave() {
    if ( window.scrollY < 5) {
      this.fixed = false;
    }
  }

}
