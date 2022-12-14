import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { ONContact } from "../Contact/Contact";
const Row=(props)=>{
  let Context=useContext(ONContact);
  let Deleted=()=>{
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
     DeletaData();
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
  }
  
  let DeletaData=()=>{
    axios.delete(`https://expenses-context-default-rtdb.firebaseio.com/expenses/${props.show.id}.json`)
    .then(response=>{
      console.log(response);
      let NewFillter=Context.NewArray.filter(element=>element.id!=props.show.id)
      Context.SetNew(NewFillter);
    }).catch(error=>{
      console.error(error);
    })
  }
  return(
    <tr>
    <td> {props.show.Title} </td>
    <td> {props.show.Data}</td>
    <td>{props.show.Value} </td>
    <td colSpan="2">{props.show.Description} </td>
    <td className="text-right">
      <a
      onClick={Deleted}
        href="#"
        className="delete">
      <FontAwesomeIcon icon={faTrashAlt} aria-hidden="true"/>
      </a>
    </td>
  </tr>
  );
}
export default Row;