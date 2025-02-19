import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EducationService, EducationInfo } from '../education.service';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'experience',
  standalone: true,  // ✅ Make it standalone
  imports: [CommonModule],  // ✅ Use standalone module imports
  templateUrl: './experience.component.html',
  styleUrls: ['../app.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(
        (data) => {
            this.experience = data;
          },
          (error) => {
            console.error('Error fetching experience data:', error);
          
    });
  }
  
}
