import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccCardService } from '../shared/services/vacc-card.service';
import { VaccCard, Vaccine } from '../models/vacc-card.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vacc-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacc-card.component.html',
  styleUrls: ['./vacc-card.component.css']
})
export class VaccCardComponent implements OnInit {

  
  vaccCard!: VaccCard;
  errorMessage: string = '';

  constructor(private vaccCardService: VaccCardService){}

   ngOnInit(): void {
    this.vaccCardService.getVaccTableData().subscribe({
      next: vacc => {
        this.vaccCard = vacc.table
        console.log("findIndexOfVacc", this.findIndexOfVacc(vacc.table.vaccines[6]))
        console.log("myCallBackConsumer ", this.myCallBackConsumer(1))
      },
      error: err => this.errorMessage = err
    })
  }
  
  getCellData(vaccine: Vaccine, month: string) {
    let doseNm = ''
    vaccine.dose.forEach((d: {doseMonth: string; doseName: any}) =>{
      if (d.doseMonth === month) {
        doseNm = d.doseName
      }
    })
    return doseNm
  }

  myCallBackConsumer(test: number): string {
    let toBeReturned = ''
    if (test == 1) {
      this.myCallback("test", (res: string) => {
        console.log("response", res)
        toBeReturned = res
        // return res
      })
    }
    else {
      this.myCallback("tested", (res: string) => {
        console.log("response", res)
        toBeReturned = res
        // return res
      })
    }
    return toBeReturned;
  }

  myCallback(data: any, cb: any){
    if(data == "test") cb("tested well")
    else cb("testing went bad")
  }

  cellClicked(vaccine: Vaccine, month: string) {
        let doseClicked = ''
        vaccine.dose.forEach((d: { doseMonth: string; doseName: any; doseType: string }, index: number)  => {
          if (d.doseMonth === month) {
            doseClicked = d.doseName
            console.log(`Vacc: ${vaccine.name} -> Dose: ${doseClicked}`)
            console.log(d);
          }
        })
  }

  getCellColor(vaccine: Vaccine, month: string) {
    let bgColor = ''
    vaccine.dose.forEach((d: { doseMonth: string; doseName: string, doseType: string; })  => {
      if (d.doseMonth === month) {
        if (d.doseType === 'single') {
          bgColor = 'green'
        } else if(d.doseType === 'combined'){
          bgColor = 'yellow'
        } else {
          bgColor = 'transparent'
        }
      }
    })

    return bgColor
  }

  getMultiDose(vaccine: Vaccine) {
    console.log(vaccine.dose)
  }

  findIndexOfVacc(vacc: Vaccine): number {
    return this.vaccCard.vaccines.indexOf(vacc)
  }

  

}
