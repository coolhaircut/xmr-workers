import { PipesModule } from './../../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { WorkerBackendsPage } from './backends.page';
import { FormsModule } from '@angular/forms';
import { CpuBackendComponent } from './components/cpu-backend/cpu-backend.component';
import { CudaBackendComponent } from './components/cuda-backend/cuda-backend.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerBackendsPage
  }
];

@NgModule({
  declarations: [
    WorkerBackendsPage,
    CpuBackendComponent,
    CudaBackendComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkerBackendsPageModule { }
