import { Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * Generated class for the PwaLgFlatStyleDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[pwa-lg-flat-style]', // Attribute selector
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaLgFlatStyleDirective {

  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.addFlatStyleClass();
    console.log('test', this.renderer2.parentNode(this.el.nativeElement));

  }

  onWindowResize() {
    this.addFlatStyleClass();
  }

  addFlatStyleClass() {
    /** 
     * Test when splitpane is not not there 
     * Needs to target parent element to apply styles to ion menu in split pane
     */
    let parentEl = this.renderer2.parentNode(this.el.nativeElement)
    window.innerWidth >= 992 ? this.renderer2.addClass(parentEl, 'pwa-lg-flat-style') : this.renderer2.removeClass(parentEl, 'pwa-lg-flat-style');
  }

}
