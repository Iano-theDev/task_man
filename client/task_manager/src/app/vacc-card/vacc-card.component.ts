import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacc-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacc-card.component.html',
  styleUrls: ['./vacc-card.component.css']
})
export class VaccCardComponent {

  months: string[] = ['At Birth', '2 months', '4 months', '6 months', '12 months', '15 months', '18 months', '5-6 years', '13-14 years']; // Add all months dynamically
  vaccines: any[] = [ // Add all vaccines dynamically
    {
      checkBox: false,
      name: 'Tuberculosis', dose: [
        { doseName: 'BCG', doseMonth: 'At Birth', doseType: 'single' }
      ]
    },
    {
      checkBox: false,
      name: 'Hep B virus', dose: [
        { doseName: 'HBYI', doseMonth: 'At Birth', doseType: 'single' }
      ]
    },
    {
      checkBox: false,
      name: 'ROTA virus', dose: [
        { doseName: 'ROTA 1', doseMonth: '2 months', doseType: 'single' },
        { doseName: 'ROTA 2', doseMonth: '4 months', doseType: 'single' },
        { doseName: 'ROTA 3', doseMonth: '6 months', doseType: 'single' }
      ]
    },
    {
      checkBox: false,
      name: 'Hexavalent', dose: [
        { doseName: 'Hexavalent 1', doseMonth: '2 months', doseType: 'combined' },
        { doseName: 'Hexavalent 2', doseMonth: '4 months', doseType: 'combined' },
        { doseName: 'Hexavalent 3', doseMonth: '6 months', doseType: 'combined' }
      ]
    },
    {
      checkBox: false,
      name: 'Pneumococcal conjugated vaccine', dose: [
        { doseName: 'PCV 1', doseMonth: '2 months', doseType: 'single' },
        { doseName: 'PCV 2', doseMonth: '4 months', doseType: 'single' },
        { doseName: 'PCV 3', doseMonth: '6 months', doseType: 'single' },
        { doseName: 'PCV 4', doseMonth: '15 months', doseType: 'single' }
      ]
    },
    {
      checkBox: false,
      name: 'OPV', dose: [
        { doseName: 'OPV 1', doseMonth: '4 months', doseType: 'single' },
        { doseName: 'OPV 2', doseMonth: '6 months', doseType: 'single' },
        { doseName: 'OPV 1st Booster', doseMonth: '15 months', doseType: 'single' },
        { doseName: 'OPV 2nd Booster', doseMonth: '18 months', doseType: 'single' },
      ]
    },
    {
      checkBox: false,
      name: 'Pentavalent', dose: [
        { doseName: 'Pentavalent', doseMonth: '6 months', doseType: 'combined' },
      ]
    },
    {
      checkBox: false,
      name: 'Measles, Mumps, Rubela', dose: [
        { doseName: 'MMR 1', doseMonth: '12 months', doseType: 'combined' },
        { doseName: 'MMR 2', doseMonth: '18 months', doseType: 'combined' }
      ]
    },
    {
      checkBox: false,
      name: 'Varcella', dose: [
        { doseName: 'varcella 1', doseMonth: '12 months', doseType: 'single' },
        { doseName: 'varcella 2', doseMonth: '5-6 years', doseType: 'single' }
      ]
    },
    {
      checkBox: false,
      name: 'Tretavalent Acellular', dose: [
        { doseName: 'Tretavalent Acellular', doseMonth: '18 months', doseType: 'combined' }
      ]
    },
    {
      checkBox: false,
      name: 'DTaP Booster', dose: [
        { doseName: 'DTaP Booster', doseMonth: '5-6 years', doseType: 'combined' }
      ]
    },
    {
      checkBox: false,
      name: 'Tdap', dose: [
        { doseName: 'Tdap', doseMonth: '13-14 years', doseType: 'combined' }
      ]
    },
  ];


  hoverCell() {

  }

  cellClicked(vaccine: any, month: string) {
        let doseClicked = ''
        vaccine.dose.forEach((d: { doseMonth: string; doseName: any; doseType: string })  => {
          if (d.doseMonth === month) {
            doseClicked = d.doseName
            console.log(`Vacc: ${vaccine.name} -> Dose: ${doseClicked}`)
          }
        })
  }

  getCellData(vaccine: any, month: string) {
    let doseNm = ''
    vaccine.dose.forEach((d: { doseMonth: string; doseName: any; })  => {
      if (d.doseMonth === month) {
        doseNm = d.doseName
      }
    })

    return doseNm
  }

  getCellColor(vaccine: any, month: string) {
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

}
