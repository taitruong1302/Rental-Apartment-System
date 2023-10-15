import { Route, Routes } from "react-router-dom";
import { DetailPost, Home, HomePage, Login, RentalApartment, RentalBedsit, RentalHouse, RentalPremises } from "./containers/public";
import { path } from "./utils/constant";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='*' element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.APARTMENT} element={<RentalApartment />} />
          <Route path={path.BEDSIT} element={<RentalBedsit />} />
          <Route path={path.HOUSES} element={<RentalHouse />} />
          <Route path={path.PREMISES} element={<RentalPremises />} />
          <Route path={'detail/*'} element={<DetailPost />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={5}
      />
    </div>
  );
}

export default App;
