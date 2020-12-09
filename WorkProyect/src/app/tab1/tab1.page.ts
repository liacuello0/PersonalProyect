import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public email:string
  public password:string
  public rePassword:string

  constructor( private _router: Router) {}

  async handleSubmit()
  {
    if(this.rePassword === this.password){
      this._router.navigate(['/tabs/tab3'])
    }
    else{
      alert("Error 404")
    }
  }
}
