import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EducationService, EducationInfo } from '../education.service';
import { EducationService } from '../education.service';

@Component({
  selector: 'education',
  standalone: true,  // ✅ Make it standalone
  imports: [CommonModule],  // ✅ Use standalone module imports
  templateUrl: './education.component.html',
  styleUrls: ['../app.component.css']
})
export class EducationComponent implements OnInit {
    education: any[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(
        (data) => {
            this.education = data;
          },
          (error) => {
            console.error('Error fetching education data:', error);
          
    });
  }
  
}
