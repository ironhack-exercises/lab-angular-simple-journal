import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service'
import { Observable } from 'rxjs/Observable'

interface Journal{
  _id: string
  title: string
  content: string
  __v: number
  date: string
}

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entryList:Array<Journal>
  constructor(public journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getJournalEntries().subscribe((journals) => this.entryList = journals)
  }

}
