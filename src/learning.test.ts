import {describe,it,expect} from 'vitest';
import {courses} from './data';
import {calculateCartTotal,enrollCourse,filterCourses,progressPercent,quizScore} from './learning';

describe('course filtering',()=>{
  it('matches category, level and search text together',()=>{
    const result=filterCourses(courses,'react','Technology','Advanced','Featured');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('React from First Principles');
  });
  it('sorts by price and rating',()=>{
    expect(filterCourses(courses,'','All','All levels','Price: low to high')[0].price).toBe(0);
    expect(filterCourses(courses,'','All','All levels','Top rated')[0].rating).toBe(4.9);
  });
});
describe('learning state calculations',()=>{
  it('deduplicates enrollments',()=>expect(enrollCourse(['c1'],'c1')).toEqual(['c1']));
  it('clamps lesson progress to 100 and handles an empty course',()=>{
    expect(progressPercent(2,5)).toBe(40);expect(progressPercent(8,5)).toBe(100);expect(progressPercent(0,0)).toBe(0);
  });
  it('scores multiple choice quiz answers as a percentage',()=>{
    expect(quizScore([1,0,2],[1,2,2])).toBe(67);expect(quizScore([],[])).toBe(0);
  });
  it('calculates cart totals in INR values',()=>expect(calculateCartTotal([courses[0],courses[1]])).toBe(courses[0].price+courses[1].price));
});

