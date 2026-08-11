import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Employee {
  name: string;
  role: string;
  email: string;
  department: string;
}

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  employees: Employee[] = [
    {
      name: 'Alice Johnson',
      role: 'Software Engineer',
      email: 'alice.johnson@example.com',
      department: 'Engineering'
    },
    {
      name: 'Brian Smith',
      role: 'Product Manager',
      email: 'brian.smith@example.com',
      department: 'Product'
    },
    {
      name: 'Cynthia Lee',
      role: 'HR Specialist',
      email: 'cynthia.lee@example.com',
      department: 'Human Resources'
    }
  ];
}
