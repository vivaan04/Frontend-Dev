class FormBuilder{
  constructor(fields){this.fields=fields}
  render(id){
    if(typeof document==='undefined')return
    const c=document.getElementById(id)
    c.innerHTML='<form id="fbForm">'+this.fields.map(f=>`<label>${f.label}</label><input name="${f.name||f.label}" type="${f.type||'text'}" />`).join('')+'<button id="fbSubmit" type="button">Submit</button></form>'
    document.getElementById('fbSubmit').addEventListener('click',()=>console.log(this.getFormData('fbForm')))
  }
  getFormData(formId){
    if(typeof document==='undefined')return {}
    const f=document.getElementById(formId)
    const data={}
    Array.from(f.elements).forEach(el=>{if(el.name)data[el.name]=el.value})
    return data
  }
}

if(typeof module!=='undefined')module.exports=FormBuilder
