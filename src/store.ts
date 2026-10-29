import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {enrollCourse} from './learning';
type State={enrolled:string[];completed:string[];saved:string[];cart:string[]; enroll:(id:string)=>void; complete:(id:string)=>void; save:(id:string)=>void; add:(id:string)=>void; clearCart:()=>void};
export const useLearning=create<State>()(persist((set)=>({enrolled:['c1','c10'],completed:['c1-0','c1-1'],saved:['c7'],cart:[],enroll:id=>set(s=>({enrolled:enrollCourse(s.enrolled,id),cart:s.cart.filter(x=>x!==id)})),complete:id=>set(s=>({completed:[...new Set([...s.completed,id])]})),save:id=>set(s=>({saved:s.saved.includes(id)?s.saved.filter(x=>x!==id):[...s.saved,id]})),add:id=>set(s=>({cart:[...new Set([...s.cart,id])]})),clearCart:()=>set({cart:[]})}),{name:'atelier-learning'}));

