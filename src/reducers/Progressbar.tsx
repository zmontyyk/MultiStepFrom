

export  const Progressbar=(state=0,action:any)=>{
    switch(action.type){
      case "INCREMENT": 
      return state+20;
      
      case "DNCREMENT": 
      return state-20;

      default:
      return state;
    }
  }
  
  