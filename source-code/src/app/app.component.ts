import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Projects Data
  projects = [
    {
      title: 'AR Navigation System',
      description: 'An indoor navigation system using AR and Vuforia Engine.',
    },
    {
      title: 'Open Eye Publishing House',
      description: 'A publishing platform for poetry, novels, and astrology books.',
    },
    {
      title: 'Nest Finder',
      description: 'An web app to find and track bird nests in your area.',
    }
  ];

  // Skills Data
  skills = ['Java', 'Angular', 'MongoDB', 'Unity', 'TypeScript', 'CSS', 'HTML'];

  // Experience Data
  experiences = [
    
    {
      role: 'AR Developer',
      company: 'AR Navigation System Project',
      duration: '2023 - 2024',
      description: 'Developed an AR indoor navigation system using Unity and Vuforia.',
    },
  ];

  // Education Data
  education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: 'Assumption University',
      duration: '2020 - 2024',
    },
    {
      certification: 'A1 French Certification',
      provider: 'Duolingo',
      duration: '2023',
    },
  ];
}
