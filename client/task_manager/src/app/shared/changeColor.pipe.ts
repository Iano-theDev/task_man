import { Pipe, PipeTransform } from "@angular/core" 

@Pipe({
    standalone: true,
    name: 'changeColor'
})
export class ChangeColorPipe implements PipeTransform {
    transform(value: string, color: string): string {
        return ``;
    }
}