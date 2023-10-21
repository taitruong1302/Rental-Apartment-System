import { Route, Routes } from "react-router-dom";
import { DetailPost, Home, HomePage, Login, Rental, SearchDetail } from "./containers/public";
import { path } from "./utils/constant";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App bg-primary h-auto">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='*' element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.APARTMENT} element={<Rental />} />
          <Route path={path.BEDSIT} element={<Rental />} />
          <Route path={path.HOUSES} element={<Rental />} />
          <Route path={path.PREMISES} element={<Rental />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
          <Route path={path.DETAIL_POST__TITLE__POSTID} element={<DetailPost />} />
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
