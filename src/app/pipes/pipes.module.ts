import { FormatHashratePipe } from './format-hashrate.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatBytesPipe } from './format-bytes.pipe';

const PIPES = [FormatHashratePipe, FormatBytesPipe]

@NgModule({
  declarations: [ PIPES ],
  providers: [ PIPES ],
  exports: [ PIPES ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
