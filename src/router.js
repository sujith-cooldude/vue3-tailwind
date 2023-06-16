import {createRouter, createWebHistory} from 'vue-router'
import MarvelHeros from './pages/MarvelHeros'
import CalendarComponent from './pages/CalendarComponent'
import HomeComponent from './pages/HomeComponent'
import SliderComponent from './pages/SliderComponent'
import CalculatorComponent from './pages/CalculatorComponent'
import MarkDown from './pages/MarkDown'
import ReusableModal from './pages/ReusableModal'

const routes = [
    {path:'/',component:HomeComponent},
    {path:'/marvel-heros',component:MarvelHeros},
    {path:'/calendar',component:CalendarComponent},
    {path:'/slider',component:SliderComponent},
    {path:'/calculator',component:CalculatorComponent},
    {path:'/markdown',component:MarkDown},
    {path:'/resuseable-modal',component:ReusableModal},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;