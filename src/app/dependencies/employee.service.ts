import { Injectable } from '@angular/core';

/* this is the default way to provide a service. it is know as a singleton service */
/* it injects it into any class that asks for it */
@Injectable({
  providedIn: 'root'
})

/* We use a service when we need to reuse data or logic across multiple components */
export class EmployeeService {
  private employees = [
    {
      id: 1,
      name: 'Alex',
      department: 'Sales Dept',
      location: 'California',
      phone: '110-011-1001',
    },
    {
      id: 2,
      name: 'Hardy',
      department: 'Planning Dept',
      location: 'New Jersey',
      phone: '552-225-2552',
    },
    {
      id: 3,
      name: 'Olive',
      department: 'HR Dept',
      location: 'Ohio',
      phone: '343-433-3443',
    },
    {
      id: 4,
      name: 'James',
      department: 'Admin Dept',
      location: 'Washington',
      phone: '464-644-4664',
    },
  ];

  getEmployees() {
    return this.employees;
  }
  getEmployeeById(id: number) {
    return this.employees.find((employee) => employee.id === id);
  }
}
