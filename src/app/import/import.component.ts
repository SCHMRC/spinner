import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { read_csv } from "danfojs"

interface DataElement{
  data: string;
  value: number
}

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  load: BehaviorSubject<string> = new BehaviorSubject(null)

  constructor() { }

  ngOnInit(): void {
  }

  readFile(event: any){
    let reader = new FileReader();
    let selectedFile: File = event.target.files[0];
    reader.onload = (e) => {
      const text = reader.result.toString()
      this.load.next(text)
    }
    reader.readAsText(selectedFile);
    this.load.subscribe(data=>{
      if(data){
        let temp2: string[][] = [[]];
        let temp = data.split('\n')
        temp.forEach((element, index) => {
          let result = element.split('\t')
          if(result[0] == 'date/time'){result.shift()}
          if(result[0] == '-'){result.shift()}
          temp2.push(result)
        });
        let tags = temp2[1]
        let unit = temp2[2]
        let x = temp2.slice(3,temp2.length)
        console.log(x)

        tags.forEach((element,index) => {
          let dataElement : DataElement[] = []
          x.forEach(element => {
            let y: DataElement = {data:element[0] ,value: parseFloat(element[index+1])}
            dataElement.push(y)
          });
          let obj = {name: element, unit: unit[index],value: dataElement}
          console.log(obj)
        });
      }
    })
  }

}
