import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css'
})
export class TestimonialComponent {
  @Input() data: { text: string, author: string, role: string, image: string } | null = null;
}
