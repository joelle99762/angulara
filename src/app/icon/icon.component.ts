import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
 @Input() title:string="title";
 @Input() description:string="description";
 @Input() icon:string="bi bi-facebook";
data:tdi[]=[];
  constructor() { }
  
  ngOnInit(): void {
    fetch('https://apivlavahassane.herokuapp.com/data')
    .then(response => response.json())
    .then(json => {
      json.forEach((element:any) => {
        let t1=new tdi();
    t1.title=element.title;
    t1.description=element.description;
    t1.icon=element.icon;
        this.data.push(t1);
    
      });
    })
  }

}
class tdi{
  title:string="";
  description:string="";
  icon:string="";
}