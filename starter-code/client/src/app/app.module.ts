import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { EntryListComponent } from './entry-list/entry-list.component'
import { SingleEntryComponent } from './single-entry/single-entry.component'

import { JournalService } from './services/journal.service'

import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: ':id',  component: SingleEntryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
