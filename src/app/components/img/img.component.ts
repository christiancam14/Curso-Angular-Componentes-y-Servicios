// eslint-disable-next-line max-len
import {Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
// eslint-disable-next-line max-len
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('Change just img => ', this.img );
    // code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // Before render
    // No async -- once time
    console.log('Construnctor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes : SimpleChanges) {
    // Before - during render
    // Changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log(changes);
  }

  ngOnInit(): void {
    // Before render
    // Async - fetch - promises - API Calls
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval( ()=> {
    //   this.counter += 1;
    //   console.log(this.counter);
    // }, 1000)
  }

  ngAfterViewInit(): void {
    // After render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // Delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  // eslint-disable-next-line require-jsdoc
  imgError() {
    this.img = this.imageDefault;
  }

  // eslint-disable-next-line require-jsdoc
  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
