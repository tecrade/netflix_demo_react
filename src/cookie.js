

export function setCookie(name,value,exp) {
    const d = new Date();
    d.setTime(d.getTime() + (exp * 24 * 60 * 60 * 1000));
    let expires = d.toUTCString();
    value=JSON.stringify(value);
    document.cookie = name+"="+value+";expires="+ expires+";path=/;";
    
  }

export function getcookie(){
  let cookie= document.cookie;
  let dataBegin
  let data="";
  if(cookie){
    for(let i=6;i<=cookie.length;i++){
        if(cookie[i]==="="){
            dataBegin=i;
            break;
        }
    }
    for(let i=dataBegin+1;i<cookie.length;i++){
       data+=cookie[i];
    }
    return(JSON.parse(data))
}}

export function updatecookie(obj){
  let cookie=document.cookie
  let dataBegin;
  let data='';
  let value;
  console.log(cookie)
  if(cookie){
    for(let i=6;i<cookie.length;i++){
        if(cookie[i]==="="){
            dataBegin=i;
            break;
        }
    }
    for(let i=dataBegin+1;i<cookie.length;i++){
       data+=cookie[i];
    }
    value=JSON.parse(data)
   value.push(obj);
   setCookie("myList",value,30);
   console.log(document.cookie);
}
}

export function removecookie(obj){
  let cookie=document.cookie
  let dataBegin;
  let data='';
  let value=[];
  if(cookie){
    for(let i=6;i<cookie.length;i++){
        if(cookie[i]==="="){
            dataBegin=i;
            break;
        }
    }
    for(let i=dataBegin+1;i<cookie.length;i++){
       data+=cookie[i];
    }
    value=JSON.parse(data)
   value.map((element,index)=>{
      if(element.id===obj.id){
       console.log(element,obj)
        value.splice(index,1);
      }
   })
   setCookie("myList",value,30);

}

}