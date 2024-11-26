import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Computer Hardware and Software Servicing',
      description: 'A service management platform for diagnosing and repairing computer hardware and software. Users can track service requests and get real-time updates.',
      image: 'images/css.jpg',
    },
    {
      title: 'Waste Management System',
      description: 'A system to manage and optimize waste collection, sorting, and disposal. It includes features like route optimization and real-time tracking of waste pick-up schedules.',
      image: 'images/wms.jpg',
    },
    {
      title: 'Student Management System',
      description: 'A platform to manage student records, including enrollment, grades, attendance, and course schedules. Admins can generate reports and track student progress.',
      image: 'images/sms.jpg',
    },
    {
      title: 'Bike Shop Management System',
      description: 'A system for managing bike sales, repair services, inventory, and customer relationships. It includes a service tracker, inventory management, and order processing.',
      image: 'images/bike.jpg',
    },
    {
      title: 'Online Quiz Platform',
      description: 'A web-based platform where users can create, participate, and track quiz scores. Features include time limits, multiple question types, and a leaderboard for top scorers.',
      image: 'images/quiz.jpg',
    },
    {
      title: 'Computer Hardware and Software Servicing',
      description: 'A service management platform for diagnosing and repairing computer hardware and software. Users can track service requests and get real-time updates.',
      image: 'images/css.jpg',
    },
    {
      title: 'Waste Management System',
      description: 'A system to manage and optimize waste collection, sorting, and disposal. It includes features like route optimization and real-time tracking of waste pick-up schedules.',
      image: 'images/wms.jpg',
    },
    {
      title: 'Student Management System',
      description: 'A platform to manage student records, including enrollment, grades, attendance, and course schedules. Admins can generate reports and track student progress.',
      image: 'images/sms.jpg',
    },
    {
      title: 'Bike Shop Management System',
      description: 'A system for managing bike sales, repair services, inventory, and customer relationships. It includes a service tracker, inventory management, and order processing.',
      image: 'images/bike.jpg',
    },
    {
      title: 'Online Quiz Platform',
      description: 'A web-based platform where users can create, participate, and track quiz scores. Features include time limits, multiple question types, and a leaderboard for top scorers.',
      image: 'images/quiz.jpg',
    },
  ];
}
