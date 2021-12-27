/* eslint-disable @typescript-eslint/naming-convention */
import { IBackendCPU, IBackendOpenCL, IBackendCuda } from './backend.interface';
import { ISavedWorker } from './saved-worker.interface';
import { ISummary } from './summary.interface';

export interface IWorker extends ISavedWorker {
  last: number;
  status: WorkerStatus;
  summary?: ISummary;
  backends?: (IBackendCPU | IBackendOpenCL | IBackendCuda)[];
  actionsLoading?: boolean; // GUI only
}

export enum WorkerStatus {
  OK = 0,
  WARNING = 1,
  ERROR = 2,
}
