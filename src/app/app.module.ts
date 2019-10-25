import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie.component';
import { MovieCollectionsComponent } from './movie-collections/movie-collections.component';
import { MovieService } from './movie-collections/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieCollectionsComponent,
    DialogComponent  // name == exported ts file
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    MovieService  // object dicoupled by constructor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
