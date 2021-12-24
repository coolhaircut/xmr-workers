import { IBackendCPU } from 'src/app/interfaces/backend.interface';
import { Component, OnDestroy, OnInit, } from '@angular/core';
import { RuntimeService } from 'src/app/engine/runtime.service';
import { Events } from 'src/app/engine/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/engine/global.service';
import { IWorker } from 'src/app/interfaces/worker.interface';
import { ISummary } from 'src/app/interfaces/summary.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-worker-backends',
  templateUrl: './backends.page.html',
  styleUrls: ['./backends.page.scss'],
})
export class WorkerBackendsPage implements OnInit, OnDestroy {

  worker: IWorker;
  loaded = false;
  cid: any;

  get cpu(): IBackendCPU | null {
    return this.worker.backends.filter(o => o.type === 'cpu')[0];
  }
  get opencl(): IBackendCPU | null {
    return this.worker.backends.filter(o => o.type === 'opencl')[0];
  }
  get cuda(): IBackendCPU | null {
    return this.worker.backends.filter(o => o.type === 'cuda')[0];
  }

  constructor(
    public runtime: RuntimeService,
    public events: Events,
    public ar: ActivatedRoute,
    public g: GlobalService,
    public router: Router
  ) { }

  ngOnInit() {
    this.worker = this.runtime.viewing;

    this.refresh();
  }

  ngOnDestroy() {
    clearTimeout(this.cid);
  }

  refresh() {
    clearTimeout(this.cid);
    this.runtime.getBackends(this.worker)
      .then(() => {
        this.loaded = true;
      })
      .finally(() => this.cid = setTimeout(this.refresh.bind(this), this.runtime.refresh.value * 1000));
  }

}
