import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import { Toaster } from './components/ui/sonner';

const router = createBrowserRouter([ 
  { path: '/', element: <App />, },  
  { path: '/about', element: <About />,},
  { path: '*', element: <NotFoundPage />}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
)
