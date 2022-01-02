import { IBackendCPU } from 'src/app/interfaces/backend.interface';
import { GlobalService } from 'src/app/engine/global.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWorker } from 'src/app/interfaces/worker.interface';

@Component({
  selector: 'app-cpu-backend',
  templateUrl: './cpu-backend.component.html',
  styleUrls: ['./cpu-backend.component.scss']
})
export class CpuBackendComponent implements OnInit {
  @Input() worker!: IBackendCPU;
  @Output() refresh: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public g: GlobalService
  ) { }

  ngOnInit(): void {
  }

}
