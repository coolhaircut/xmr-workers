import { IBackendCuda } from 'src/app/interfaces/backend.interface';
import { GlobalService } from 'src/app/engine/global.service';
import { IWorker } from 'src/app/interfaces/worker.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cuda-backend',
  templateUrl: './cuda-backend.component.html',
  styleUrls: ['./cuda-backend.component.scss']
})
export class CudaBackendComponent implements OnInit {
  @Input() worker!: IBackendCuda;
  @Output() refresh: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public g: GlobalService
  ) { }

  ngOnInit(): void {
  }

}
