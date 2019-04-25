import { MatButtonModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule, MatInputModule ],
  exports: [ MatButtonModule, MatInputModule ],
})

export class MaterialModule { }