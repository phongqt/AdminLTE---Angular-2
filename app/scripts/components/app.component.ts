import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { RootScopeService } from '../services/rootscope.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/views/main.html',
  directives: [ROUTER_DIRECTIVES]
})

// // For methods on e.g. $('a')
// interface JQueryStatic {
//     AdminLTE(options): JQueryAdminLTE;
// }

// interface JQueryAdminLTE {
//     layout(name, value): any;
// }

export class AppComponent implements OnInit{
  constructor() {
    
  }
  ngOnInit() {
    // $.AdminLTE.layout.fix();
  }
}
