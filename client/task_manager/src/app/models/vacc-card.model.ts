export interface Dose {
    doseName: string,
    doseMonth: string,
    doseType: string
}

export interface Vaccine {
    checkBox: boolean,
    name: string,
    dose: Dose[]
}

export interface VaccCard {
    heading: string,
    dates: string[],
    vaccines: Vaccine[]
}