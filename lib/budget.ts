export type Entry={id:string;label:string;amount:number;kind:string;category:string;date:string;frequency:string;endDate:string|null;note:string};
export const frequencies:Record<string,string>={once:'Une seule fois',monthly:'Chaque mois',quarterly:'Tous les 3 mois',yearly:'Chaque année'};
export const kinds:Record<string,string>={daily:'Dépense quotidienne',fixed:'Charge fixe',subscription:'Abonnement',income:'Revenu'};
export function occurrence(e:Entry,month:string):string|null {
 const [y,m]=month.split('-').map(Number);const [sy,sm,sd]=e.date.split('-').map(Number);const delta=(y-sy)*12+m-sm;
 if(delta<0)return null;
 const step=({once:0,monthly:1,quarterly:3,yearly:12} as Record<string,number>)[e.frequency];
 if(step===undefined || (step===0 ? delta!==0 : delta%step!==0)) return null;
 const day=Math.min(sd,new Date(y,m,0).getDate());const date=`${month}-${String(day).padStart(2,'0')}`;
 return e.endDate && date>e.endDate ? null:date;
}
export function monthShift(month:string,n:number){const [y,m]=month.split('-').map(Number);const d=new Date(y,m-1+n,1);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;}
export const money=(n:number)=>new Intl.NumberFormat('fr-BE',{style:'currency',currency:'EUR'}).format(n/100);
export const monthName=(m:string)=>new Intl.DateTimeFormat('fr-BE',{month:'long',year:'numeric'}).format(new Date(m+'-01T12:00:00'));
export const today=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Brussels'}).format(new Date());
