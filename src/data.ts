export type Course = { id:string; slug:string; title:string; category:string; level:string; description:string; instructor:string; duration:string; price:number; rating:number; students:number; image:string; outcomes:string[]; lessons:string[]; featured?:boolean };
const seeds:[string,string,string,string,number,string][] = [
['Designing Digital Products','Design','Maya Patel','Craft meaningful digital experiences from research to refined interface.',3499,'photo-1581291518857-4e27b48ff24e'],
['Product Design Foundations','Design','Maya Patel','Build a confident foundation in user centered product design.',0,'photo-1559028006-448665bd7c7f'],
['Brand Strategy for Startups','Design','Leo Chen','Shape a memorable brand with purpose, positioning and voice.',2499,'photo-1542744173-8e7e53415bb0'],
['UX Research in Practice','Design','Aisha Rahman','Turn conversations and observations into confident decisions.',2999,'photo-1454165804606-c3d57bc86b40'],
['Visual Storytelling','Design','Leo Chen','Make ideas impossible to ignore through visual narrative.',1999,'photo-1531058020387-3be344556be6'],
['Design Systems at Scale','Design','Maya Patel','Create reusable patterns that keep teams moving together.',3999,'photo-1558655146-d09347e92766'],
['Modern JavaScript','Technology','Arjun Mehta','Write clear, expressive JavaScript for the modern web.',2999,'photo-1516321318423-f06f85e504b3'],
['React from First Principles','Technology','Noah Williams','Understand the ideas behind React as you build real interfaces.',4499,'photo-1633356122544-f134324a6cee'],
['Python for Data Analysis','Technology','Nina Kapoor','Explore data, ask better questions and communicate findings.',3999,'photo-1526379095098-d400fd0bf935'],
['AI Literacy for Everyone','Technology','Dr. Sana Iqbal','Understand how AI works and where human judgment matters.',0,'photo-1677442136019-21780ecad995'],
['Cloud Computing Essentials','Technology','Arjun Mehta','Learn the foundations of cloud infrastructure and services.',3499,'photo-1451187580459-43490279c0fa'],
['Cybersecurity Foundations','Technology','Nina Kapoor','Build practical habits for safer digital work.',2999,'photo-1550751827-4bd374c3f58b'],
['Business Model Thinking','Business','Priya Nair','Test assumptions and design a business that creates value.',2499,'photo-1460925895917-afdab827c52f'],
['Leadership with Empathy','Business','Daniel Brooks','Lead teams with clarity, trust and thoughtful feedback.',3499,'photo-1521737711867-e3b97375f902'],
['Project Management Essentials','Business','Priya Nair','Guide complex work from kickoff to meaningful outcomes.',1999,'photo-1454165804606-c3d57bc86b40'],
['Negotiation: Find Common Ground','Business','Daniel Brooks','Prepare and negotiate with curiosity and confidence.',2499,'photo-1556761175-b413da4baf72'],
['Growth Marketing Playbook','Marketing','Elena Garcia','Build sustainable growth through focused experimentation.',2999,'photo-1460925895917-afdab827c52f'],
['Content that Connects','Marketing','Elena Garcia','Create useful content that earns attention and trust.',1999,'photo-1499750310107-5fef28a66643'],
['Social Media Strategy','Marketing','Marcus Lee','Build a social presence around community and purpose.',2499,'photo-1611162616305-c69b3fa7fbe0'],
['Financial Wellbeing','Finance','Ravi Shah','Make thoughtful everyday decisions about money.',0,'photo-1460472178825-e5240623afd5'],
['Investing: The Long View','Finance','Ravi Shah','Understand the principles behind long term investing.',2499,'photo-1611974789855-9c2a0a7236a3'],
['Personal Finance Basics','Finance','Farah Khan','Build a budget and plan for the goals that matter.',1499,'photo-1554224155-6726b3ff858f'],
['Mindful Productivity','Personal Development','Farah Khan','Work with focus while protecting your energy.',1499,'photo-1497366754035-f200968a6e72'],
['Everyday Spanish','Languages','Sofia Martinez','Start speaking Spanish for travel, work and daily life.',1999,'photo-1526778548025-fa2f459cd5c1'],
];
export const courses:Course[] = seeds.map(([title,category,instructor,description,price,photo],i)=>({id:`c${i+1}`,slug:title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''),title,category,instructor,description,price,level:['Beginner','Intermediate','Beginner','Advanced'][i%4],duration:`${6+i%8}h ${i%4+2}m`,rating:+(4.7+(i%3)*.1).toFixed(1),students:1200+(i*683)%9800,image:`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1000&q=85`,outcomes:['Build practical skills you can use right away','Learn a clear, repeatable process','Create a project to share with confidence'],lessons:i<6?['Start here: a new way to see the work','The essential foundations','Practice with a real world brief','Make it your own','Knowledge check']:['Welcome and course overview','Core concepts and examples','Put your skills into practice'],featured:i<6}));
export const categories=['All','Technology','Business','Design','Marketing','Finance','Personal Development','Languages'];
export const instructors=[...new Set(courses.map(c=>c.instructor))].map((name,i)=>({name,role:['Product designer','Learning strategist','Creative director','Educator'][i%4],bio:'A thoughtful practitioner who brings real work, generous feedback and a love of learning into every lesson.',photo:`https://images.unsplash.com/photo-${['1534528741775-53994a69daeb','1500648767791-00dcc994a43e','1531123897727-8f129e1688ce','1506794778202-cad84cf45f1d'][i%4]}?auto=format&fit=crop&w=500&q=85`}));

