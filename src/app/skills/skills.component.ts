import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Php',
    'Networking Fundamentals',
    'OSI Model',
    'TCP/IP',
    'Subnetting',
    'IP Addressing',
    'Routing and Switching',
    'VLANs',
    'Routing Protocols (RIP, OSPF, BGP)',
    'Network Security',
    'Firewalls',
    'Setting Up Computer Networks',
    'Setting Up Computer Servers',
    'Maintaining Computer Systems and Networks',

  ];
}
