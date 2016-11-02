import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cads_tag-menu-entry-site',
  //templateUrl: '../templates/cads_tag-menu-entry-site.html'
  template: `
          <table class="cads_full_sized">    
            <tr class="cads_space_header" id="{{name}}">
            <td>
            <div class="cads_no_decoration">
                <a (click)="toogleID()">
                <div class="cads_full_sized">{{entry}} </div></a>
            </div>
            </td>
          </tr>
          </table>
    `,

})

export class CADS_TAG_MENU_ENTRY_SITE implements OnInit{ 
  @Input()  entry: string;
  @Input() name: string;
  @Input()  toHide: string;
  
  toogleID(){
      if(document.getElementById(this.toHide).classList.contains('cads_hide')){
        document.getElementById(this.toHide).classList.remove('cads_hide');
        document.getElementById(this.name).style.backgroundColor = '#204C86';
      }
      else{
        document.getElementById(this.toHide).classList.add('cads_hide');
      }
      void(0);
  }
  
  ngOnInit() {
    console.log("= CADS_TAG_MENU_ENTRY_SITE Tag loaded... =");
  }
}