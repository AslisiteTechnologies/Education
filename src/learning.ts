import type {Course} from './data';

export function filterCourses(all:Course[],query:string,category:string,level:string,sort:string){
  return all.filter(c=>(category==='All'||c.category===category)&&(level==='All levels'||c.level===level)&&`${c.title} ${c.description} ${c.instructor}`.toLowerCase().includes(query.toLowerCase())).sort((a,b)=>sort==='Price: low to high'?a.price-b.price:sort==='Top rated'?b.rating-a.rating:0);
}
export const progressPercent=(completed:number,total:number)=>total<=0?0:Math.min(100,Math.round(completed/total*100));
export const quizScore=(answers:number[],correct:number[])=>correct.length?Math.round(answers.reduce((n,a,i)=>n+(a===correct[i]?1:0),0)/correct.length*100):0;
export const enrollCourse=(enrolled:string[],id:string)=>[...new Set([...enrolled,id])];
export const calculateCartTotal=(items:Course[])=>items.reduce((sum,c)=>sum+c.price,0);
