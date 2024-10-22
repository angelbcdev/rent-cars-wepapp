import { useEffect } from "react";
import MainRouter from "./router/mainRouter";

import { useAppDispatch } from "./redux/store";


function App() {
  // const dispatch = useAppDispatch();

  useEffect(() => {
 
        // dispatch(getAgencias(res.data));

  }, []);

  return (
    <div className='bg-[#ffffff]'>
      <MainRouter />
    </div>
  );
}

export default App;
