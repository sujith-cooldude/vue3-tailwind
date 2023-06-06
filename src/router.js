import {createRouter, createWebHistory} from 'vue-router'
import MarvelHeros from './pages/MarvelHeros'
import CalendarComponent from './pages/CalendarComponent'
import HomeComponent from './pages/HomeComponent'
import MarkDown from './pages/MarkDown'

const routes = [
    {path:'/',component:HomeComponent},
    {path:'/marvel-heros',component:MarvelHeros},
    {path:'/calendar',component:CalendarComponent},
    {path:'/markdown',component:MarkDown},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;