import React, { useState } from "react";

export const ONContact=React.createContext({
NewArray:[],
SetNew:()=>{}
});

export const ONContactHandle=(props)=>{
let [NewArray,SetNew]=useState([]);
return(
<ONContact.Provider value={{
  NewArray:NewArray,
  SetNew:SetNew
}}>
{props.children}
</ONContact.Provider>
);
}