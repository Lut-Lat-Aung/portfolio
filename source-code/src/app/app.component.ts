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
  
  title = 'source-code';
  
  
  scrolltocontent(): void {
    const contentsection = document.getElementById('content');
    if (contentsection) {
      this.smoothScroll(contentsection, 1200);
    }
  }
  
  smoothScroll(target: HTMLElement, duration: number): void {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const startTime = performance.now();
  
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    const scrollAnimation = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const nextScrollPosition = ease(
        elapsedTime,
        startPosition,
        targetPosition - startPosition,
        duration
      );
      window.scrollTo(0, nextScrollPosition);
  
      if (elapsedTime < duration) {
        requestAnimationFrame(scrollAnimation);
      } else {
        window.scrollTo(0, targetPosition); // Ensure exact final position
      }
    };
  
    requestAnimationFrame(scrollAnimation);
  }


  // Projects Data
  projects = [
    {
      title: 'AR Navigation System',
      description: 'An indoor navigation system using AR and Vuforia Engine.',
      github: "https://github.com/Lut-Lat-Aung/AR_Navigation_System",
    },
    {
      title: 'Open Eye Publishing House',
      description: 'A publishing platform for poetry, novels, and astrology books.',
      github: "https://github.com/Lut-Lat-Aung/maison_d-edition",
    },
    {
      title: 'Music Player App',
      description: 'A music player app with a custom playlist feature.',
      github: "https://github.com/Lut-Lat-Aung/Music_Player",
    },
    {
      title: 'Nest Finder',
      description: 'An web app to find and track bird nests in your area.',
      link: 'https://nest-finder-mocha.vercel.app/',
      github: "https://github.com/Lut-Lat-Aung/nest_finder",
    }
  ];

  openProject(url: string) {
    window.open(url, '_blank');
  }

  // Skills Data
  skills = ['Python','JavaScript','SQL','MongoDB','Java', 'Angular', 'MongoDB', 'Unity', 'TypeScript', 'CSS', 'HTML'];

  // Experience Data
  experiences = [
    
    {
      role: 'AR Developer',
      company: 'AR Navigation System Project',
      duration: '2023 - 2024',
      description: 'Developed an AR indoor navigation system using Unity and Vuforia.',
    },{
      role: 'Web Developer',
      company: 'Nest Finders',
      duration: '2023 - 2024',
      description: 'Developed a web app to find and track bird nests in your area.',
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
