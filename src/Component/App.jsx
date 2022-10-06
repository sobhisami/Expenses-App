import logo from '../Resource/img/m1.png';
import Form from './Form';
import Table from './Table';
const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={logo}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-sm-6 mt-5">
          <div className="row tit">
            <h4 className="">wellcom to Momen Expense Manager </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <Form />
        </div>
      </div>
      <Table />
    </div>
  );
};
export default App;
