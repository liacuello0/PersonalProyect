import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private nota: string
  private texto: string

  constructor() {}

  async handleSubmit(e){
    console.log(this.nota, this.texto)
    this.texto = e.target["nota"].value
  }
}
