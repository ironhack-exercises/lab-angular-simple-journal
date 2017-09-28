import { Component, OnInit } from '@angular/core'
import { JournalService } from '../services/journal.service'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'

interface Journal{
  _id: string
  title: string
  content: string
  __v: number
  date: string
}

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: Journal

  constructor(public journalService: JournalService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe( params => {
      this.journalService.getJournalEntry(params['id'])
        .subscribe( entry => this.entry = entry)
    })
  }

}
