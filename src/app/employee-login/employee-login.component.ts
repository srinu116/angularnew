import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  employeeId!: string;


  employee:Employee = new Employee();

  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    alert("login Successful");
    this.goToEmployeeList();
  }

}
