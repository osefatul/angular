import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
    ){}
  
  color: string = "white"
  bckColor: string = "black"
  ngOnInit(){
    this.element.nativeElement.style.color = this.color

    //or we can use render2, same result.
    this.renderer.setStyle(this.element.nativeElement, "background-color", this.bckColor)
  }

  @HostListener ("mouseover") onMouseover () {
    this.element.nativeElement.style.fontSize = "35px"
  }

  @HostListener ("mouseout") onMouseout () {
    this.element.nativeElement.style.fontSize = "13px"
  }
}
