/* eslint-disable @typescript-eslint/naming-convention */

interface IBackend {
  type: string;
  enabled: boolean;
  profile: string;
  algo: string;
  hashrate: number[];
}

export interface IBackendCPU extends IBackend {
  'argon2-impl': string;
  asm: string;
  'astrobwt-max-size': number;
  hugepages: number[];
  'hw-aes': boolean;
  memory: number;
  msr: boolean;
  priority: number;
  threads: IBackendThread[];
}

export interface IBackendThread {
  affinity: number;
  av: number;
  hashrate: number[];
  intensity: number;
}






export interface IBackendOpenCL extends IBackend {
  todo: number;
}





export interface IBackendCuda extends IBackend {
  versions: IBackendCudaVersions;
  threads: IBackendCudaThread[];
}

export interface IBackendCudaVersions {
  'cuda-runtime': string;
  'cuda-driver': string;
  plugin: string;
  nvml: string;
  driver: string;
}

export interface IBackendCudaThread {
  index: number;
  threads: number;
  blocks: number;
  bfactor: number;
  bsleep: number;
  affinity: number;
  dataset_host: boolean;
  hashrate: number[];
  name: string;
  bus_id: string;
  smx: number;
  arch: number;
  global_mem: number;
  clock: number;
  memory_clock: number;
  health: IBackendCudaThreadHealth;
}

export interface IBackendCudaThreadHealth {
  temperature: number;
  power: number;
  clock: number;
  mem_clock: number;
  fan_speed: number[];
}
