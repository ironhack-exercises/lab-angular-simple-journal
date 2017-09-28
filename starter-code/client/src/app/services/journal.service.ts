import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class JournalService {

  BASE_URL:string = 'http://localhost:3000'

  constructor(private http: Http) { }

  getJournalEntries() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json())
  }

  getJournalEntry(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json())
  }
}
