import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    standalone: true,
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    cropWidth: number = 75;


    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
        // console.log(`${this.cropWidth}something changed`)
    }

    onClick(): void {
        this.ratingClicked.emit(`you clicked a rating of ${this.rating}`)
    }
}
