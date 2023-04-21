import {Directive,HostListener,HostBinding} from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{

    @HostBinding('class.open') dropItDown=false
    @HostListener('click') isClicked(){
        this.dropItDown=!this.dropItDown;
    }
}