import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact',
  standalone: true,  // ✅ Make it standalone
  imports: [CommonModule],  // ✅ Use standalone module imports
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo: any = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContact().subscribe(
      (data) => {
        this.contactInfo = data;
      },
      (error) => {
        console.error('Error fetching contact info:', error);
      }
    );
  }
  
}
