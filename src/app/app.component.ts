import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';  // Import your UserListComponent


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}
