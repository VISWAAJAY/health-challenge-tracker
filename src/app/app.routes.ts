import { Routes } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { ExploreComponent } from './components/explore/explore.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: 'add-workout',
    component: AddWorkoutComponent,
  },
  {
    path:'',
    component:ExploreComponent
  },
  {
    path: ':id',
    component: UserComponent
  }
];
