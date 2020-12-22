
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Output() filesUploaded = new EventEmitter<any>();

  constructor() { }

  @HostListener('dragover', ['$event'])
  // tslint:disable-next-line: typedef
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  // tslint:disable-next-line: typedef
  onDragleave(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  // tslint:disable-next-line: typedef
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    this.filesUploaded.emit(files);
  }

}
