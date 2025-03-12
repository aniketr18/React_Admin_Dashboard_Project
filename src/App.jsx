import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
function App() {

  const router = createBrowserRouter([
      {
        path:"/",
        exact:true,
        element: (
        <>
        <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className='sidebarwrapper w-[25%]'>
          <Sidebar />
          </div>
          <div className="contentRight py-10 px-5 w-[68%]">
          <Dashboard/>
          </div>
          </div>
        </section>
        
        </>
        ),
      },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
