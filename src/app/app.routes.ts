import { Routes } from '@angular/router';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { HomePages } from './features/home/pages/home-pages/home-page';
import { LayoutsPage } from './features/layouts-page/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/pages/profile-page/profile-page';

export const routes: Routes = [
    { path: '', component: HomePages},
    { path: 'students', component: StudentsPage},
    { path: 'students/:id', component: StudentDetailPage},
    { path: 'layouts', component: LayoutsPage},
    { path: 'signup', component: SignupPage},
    { path: 'profile', component: ProfilePage },

    //redireccionamiento
    { path: '**', redirectTo: ''}
];
