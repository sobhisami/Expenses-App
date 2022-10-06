import { useContext } from "react";
import { ONContact } from "../Contact/Contact";
import Row from "./Row";

const Table=()=>{
  let Context=useContext(ONContact);
return(
  
  <div className="row mt-5 mb-5">
  <div className="custom-card ">
    <table className="table ">
      <thead>
        <tr>
          <th> Title</th>
          <th> Date</th>
          <th>value</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr id="addRow"></tr>
        {Context.NewArray.map(element=>(<Row key={element.id} show={element} />))}
      </tbody>
    </table>
  </div>
</div>
);
}
export default Table;