import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import Page from '../app/page';
import '../app/globals.css';
import {hasAccess,unlock,createNotebook} from './storage';
function Access(){const [code,setCode]=useState(''),[error,setError]=useState('');return <main className="access-page"><div className="panel"><span className="eyebrow">MON CARNET DE DÉPENSES</span><h1>Mon espace personnel</h1><p>Ouvre le lien personnel de ton carnet ou saisis ton code d’accès.</p><form className="entry-form" onSubmit={e=>{e.preventDefault();try{unlock(code)}catch(e){setError((e as Error).message)}}}><label>Code personnel<input required value={code} onChange={e=>setCode(e.target.value)} autoComplete="off" spellCheck={false}/></label>{error&&<p className="error">{error}</p>}<button className="primary">Ouvrir mon carnet</button></form><button className="text-button" onClick={createNotebook}>Créer un nouveau carnet vide</button><p className="form-hint">Tes données sont chiffrées avant leur sauvegarde dans Firebase, projet carnet-films. Le lien et le code permettent de les déchiffrer. Garde-les pour retrouver ton carnet sur un autre appareil.</p></div></main>}
createRoot(document.getElementById('root')!).render(hasAccess()?<Page/>:<Access/>);
