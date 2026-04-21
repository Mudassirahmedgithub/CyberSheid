import React, { useState } from 'react';

export default function PredictPage(){
 const fields = ['Active Min','Fwd PSH Flags','SYN Flag Count','Flow Packets/s','Fwd Packets/s','Active Mean','Active Std','Flow IAT Min','Bwd IAT Total','URG Flag Count','Bwd IAT Std','FIN Flag Count','Min Packet Length','Down/Up Ratio','Total Length of Fwd Packets','Subflow Fwd Bytes','PSH Flag Count','Bwd IAT Max'];
 const [form,setForm]=useState(Object.fromEntries(fields.map(f=>[f,''])));
 const [result,setResult]=useState(null); const [loading,setLoading]=useState(false);
 const onChange=(k,v)=>setForm({...form,[k]:v});
 const submit=async(e)=>{e.preventDefault(); setLoading(true); setResult(null); try{ const payload={}; fields.forEach(f=>payload[f]=Number(form[f]||0)); const res=await fetch('https://render-u60p.onrender.com/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); const data=await res.json(); setResult(data.Predicted_Label || data.prediction || JSON.stringify(data)); }catch(err){ setResult('API Error: '+err.message);} setLoading(false);} 
 return <div className='min-h-screen bg-slate-50 p-6'>
  <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow p-6'>
   <h1 className='text-3xl font-bold mb-2'>Network Threat Prediction</h1>
   <p className='text-slate-500 mb-6'>Enter network feature values and run prediction from your FastAPI backend.</p>
   <form onSubmit={submit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {fields.map(f=><div key={f}><label className='block text-sm font-medium mb-1'>{f}</label><input type='number' step='any' value={form[f]} onChange={e=>onChange(f,e.target.value)} className='w-full border rounded-xl px-3 py-2'/></div>)}
    <div className='md:col-span-2 flex gap-3 pt-2'>
      <button className='bg-black text-white px-5 py-2 rounded-xl'>{loading?'Predicting...':'Predict'}</button>
      <button type='button' onClick={()=>setForm(Object.fromEntries(fields.map(f=>[f,''])))} className='border px-5 py-2 rounded-xl'>Reset</button>
    </div>
   </form>
   {result && <div className='mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200'>
      <div className='text-sm text-slate-500'>Predicted_Label</div>
      <div className='text-2xl font-bold'>{result}</div>
   </div>}
  </div>
 </div>
}
