import { binding } from '../../../db/binding';
const bad = (error: string, status=400) => Response.json({error},{status});
export async function GET() {
 try { const result=await binding().prepare('SELECT id, label, amount, kind, category, date, frequency, end_date AS endDate, note FROM entries ORDER BY date DESC').all(); return Response.json({entries:result.results},{headers:{'Cache-Control':'no-store'}}); }
 catch(e){console.error(e);return bad('Impossible de charger tes dépenses. Réessaie dans un instant.',503);}
}
export async function POST(request:Request) {
 if(request.headers.get('origin') && request.headers.get('origin') !== new URL(request.url).origin) return bad('Requête refusée.',403);
 try {
 const p=await request.json() as Record<string, any>;
 if(!p || typeof p!=="object" || Array.isArray(p)) return bad("Données invalides.");
 if(p.action==='delete') { if(typeof p.id!=='string') return bad('Dépense invalide.'); await binding().prepare('DELETE FROM entries WHERE id = ?').bind(p.id).run(); return Response.json({ok:true}); }
 const validDate=(s:unknown):s is string=>typeof s==='string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s)) && new Date(s).toISOString().slice(0,10)===s;
 if(typeof p.label!=='string'||!p.label.trim()||p.label.length>100||!Number.isSafeInteger(p.amount)||p.amount<=0||p.amount>100000000||!['daily','fixed','subscription','income'].includes(p.kind)||!['once','monthly','quarterly','yearly'].includes(p.frequency)||!validDate(p.date)||(p.endDate && (!validDate(p.endDate)||p.endDate<p.date))||typeof p.category!=='string'||p.category.length>70||typeof p.note!=='string'||p.note.length>1000) return bad('Vérifie le libellé, le montant et les dates.');
 if(p.kind==='daily' && p.frequency!=='once')return bad('Une dépense quotidienne doit être ponctuelle.');
 const id=typeof p.id==='string' ? p.id : crypto.randomUUID();
 await binding().prepare('INSERT INTO entries (id,label,amount,kind,category,date,frequency,end_date,note) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET label=excluded.label, amount=excluded.amount, kind=excluded.kind, category=excluded.category, date=excluded.date, frequency=excluded.frequency, end_date=excluded.end_date, note=excluded.note').bind(id,p.label.trim(),p.amount,p.kind,p.category,p.date,p.frequency,p.endDate||null,p.note).run();
 return Response.json({ok:true});
 }catch(e){console.error(e);return bad('Enregistrement impossible. Tes informations sont conservées dans le formulaire.',503);}
}
