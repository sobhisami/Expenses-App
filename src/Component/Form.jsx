import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { ONContact } from "../Contact/Contact";
import Oprations from "../Controller/Opration";

const Form=()=>{
  let Context=useContext(ONContact);
  let Submit=(event)=>{
   event.preventDefault();
   if (cheak()) {
    SavaObject();
    Clear();
   }

  }
  
  let cheak=()=>{
 if (   TitleRef.current.value!='' &&
  DataRef.current.value!='' &&
  ValueRef.current.value!='' &&
  DiscriptionRef.current.value!='') {
    return true;
 }
 Massage();
 return false;
  }
  let Massage=(Massage)=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
  let TitleRef=useRef();
  let DataRef=useRef();
  let ValueRef=useRef();
  let DiscriptionRef=useRef();
  let SavaObject=()=>{
    let Object={
      Title:TitleRef.current.value,
      Data:DataRef.current.value,
      Value:ValueRef.current.value,
      Description:DiscriptionRef.current.value,
    }
    // console.log(Object);
    axios.post("https://expenses-context-default-rtdb.firebaseio.com/expenses.json",
      Object,
    ).then(response=>{
       Object.id=response.data.name;
       Context.SetNew((New)=>{
        return [Object,...New]
        });
    }).catch(error=>{
      console.error(error);
    })
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 1500
    })
  }
  let Clear=()=>{
    TitleRef.current.value="";
    DataRef.current.value="";
    ValueRef.current.value="";
    DiscriptionRef.current.value="";
  }
  return(
  <form className="row" onSubmit={Submit}>
  <div className="mb-3 col-md-6">
    <label className="form-label">Title</label>
    <input
      type="text"
      className="form-control addTitle"
      aria-describedby=""
      ref={TitleRef}
    />
  </div>

  <div className="mb-3 col-md-6">
    <label className="form-label">Date</label>
    <input
      type="date"
      className="form-control addDate"
      aria-describedby=""
      ref={DataRef}
    />
  </div>

  <div className="mb-3 col-md-6">
    <label className="form-label">Value</label>
    <input
      type="number"
      className="form-control addValue"
      aria-describedby=""
      ref={ValueRef}
    />
  </div>
  <div className="mb-3 col-md-6">
    <label
      htmlFor="title"
      className="form-label">
      Description
    </label>
    <input
      type="text"
      className="form-control addDescrption"
      aria-describedby=""
      ref={DiscriptionRef}
    />
  </div>
  <div className="mb-3 col-md-12 text-right">
    <button
      type="submit"
      className="btn btn-primary addBtn">
      Add
    </button>
  </div>
</form>
);
}
export default Form;