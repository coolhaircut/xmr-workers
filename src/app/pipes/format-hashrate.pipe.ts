import { GlobalService } from 'src/app/engine/global.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatHashrate'
})
export class FormatHashratePipe implements PipeTransform {

  constructor(
    private global: GlobalService
  ) {}

  transform(value: number, decimals: number = 2): string {
    return this.global.formatHashrate(value, decimals);
  }
}
