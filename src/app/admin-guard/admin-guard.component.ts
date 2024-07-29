import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-guard',
  templateUrl: './admin-guard.component.html',
  styleUrls: ['./admin-guard.component.css']
})
export class AdminGuardComponent {
  hasUnsavedChanges = true;

  canDeactivate(): boolean {
    return confirm("Do you want to leave this page? Unsaved changes will be lost.");
  }
}
