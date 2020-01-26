import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForms';
  id="";
  name="";
  salary="";
  department="";
  add(id,name,salary,department)
  {
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.department=department;
    alert(this.id+" "+this.name+" "+this.salary+" "+this.department)
  }
}
