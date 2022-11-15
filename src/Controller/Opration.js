import axios from "axios";
import { useContext, useEffect } from "react";
import { ONContact } from "../Contact/Contact";

class Oprations{
  Context=useContext(ONContact);
  getData=()=>{
    axios.get("https://expenses-context-default-rtdb.firebaseio.com/expenses.json"
    ).then(response=>{
      // console.log(response.data);
      let fetchdata=[];
      for (let key in response.data) {
        let expen=response.data[key];
        expen.id=key;
        fetchdata.push(expen);
    this.Context.SetNew(fetchdata)
      }
    }).catch(error=>{
      console.error(error);
    })
  }

}
export default Oprations;