import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public email:string
  public password:string

  constructor(
    private _router:Router
  ) {}

  async handleSubmit()
  {
    this._router.navigate(['/tabs/tab3'])
  }
}
