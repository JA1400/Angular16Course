import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  /* employees = [
    { empId: '101', empName: 'Joe', empDept: 'Marketing' },
    { empId: '102', empName: 'Alex', empDept: 'Managment' },
    { empId: '103', empName: 'Nathan', empDept: 'Hr' },
    { empId: '104', empName: 'JoSiya', empDept: 'Sales' }
  ]; */

  /* id: string = '';
  name: string = ''; */

  /* constructor(private route: ActivatedRoute) { */
  /* use to get current route information *//* 
  const params = this.route.snapshot.params; */
  /* params holds the current route info and ['id'] is the param we are looking for */
  /* this.id = params['id'];
  this.name = params['name'];
  console.log(`Emp_Id: ${this.id}, Emp_Name: ${this.name}`); *//* 
} */

  employees = [
    { id: 101, name: 'Aaron' },
    { id: 102, name: 'Mary' },
    { id: 103, name: 'Luke' },
    { id: 104, name: 'Kate' },
    { id: 105, name: 'Chris' }
  ]

  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute) { 
    /* query params monitors changes of the route events, such as parameter changes */
    /* subscribe() continuously monitors query parameters in the URL and updates the component when a change is detected */
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params);
    })
  }

}
