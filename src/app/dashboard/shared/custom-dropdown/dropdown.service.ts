import { Injectable, ElementRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DropdowHandlerService {
    dropdownHandler = (el: ElementRef) => {
        for (const dropdown of el.nativeElement.querySelectorAll('.custom-dropdown')) {
            dropdown.addEventListener('click', function f(): void {
                this.querySelector('.custom-dropdown-container').classList.toggle('open');
            });
        }

        for (const option of el.nativeElement.querySelectorAll('.custom-option')) {
            option.addEventListener('click', function f(): void {
                if (!this.classList.contains('selected')) {
                    this.parentNode
                        .querySelector('.custom-option.selected')
                        .classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.custom-dropdown-container').querySelector(
                        '.custom-dropdown-display span'
                    ).textContent = this.textContent;
                }
            });
        }
    }
}
