import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
param: number;
lista: number[] = [];
start: Date;
end: Date;
difference: number;
  constructor(){
    let x = {'italia':{'min':55,'max':25},'english':{'min':66,'max':88}}
    let y = {'italia':{'min':55,'max':25}}

    console.log(x)
  }

  onClick(){
    this.start = new Date()
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./backgroun.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.lista = data.lista
      };
      worker.postMessage(this.param);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
    this.end = new Date()
    this.difference = this.end.valueOf() - this.start.valueOf()


  }

  elab(num: number): number[]{
    let lista: number[] = []
    for(let i =0 ; i< num; i++){
      lista.push(Math.floor(Math.random() * 100))
    }
    return lista

  }


}
