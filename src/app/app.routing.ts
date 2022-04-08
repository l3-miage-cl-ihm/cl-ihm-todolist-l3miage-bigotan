import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list';
import { AuthentificationComponent } from './authentification';

const routes: Routes = [
    { path: 'todolist', component: TodoListComponent },
    { path: '', component: AuthentificationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);