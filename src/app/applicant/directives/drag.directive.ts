
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Output() filesUploaded = new EventEmitter<any>();

  constructor() { }

  @HostListener('dragover', ['$event'])
  // tslint:disable-next-line: typedef
  onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('drg over');
  }

  @HostListener('dragleave', ['$event'])
  // tslint:disable-next-line: typedef
  onDragleave(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('drg leave');
  }

  @HostListener('drop', ['$event'])
  // tslint:disable-next-line: typedef
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('drg over');
    const files = event.dataTransfer.files;
    this.filesUploaded.emit(files);
  }

}
