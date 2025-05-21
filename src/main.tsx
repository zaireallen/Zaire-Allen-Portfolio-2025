import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Exp from './Exp.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import { Toaster } from './components/ui/sonner'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/exp', element: <Exp /> },
  { path: '*', element: <NotFoundPage /> }
])

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppWithScrollToTop() {
  return (
    <>
      <ScrollToTop />
      <RouterProvider router={router} />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        debug: import.meta.env.MODE === 'development',
      }}
    >
      <RouterProvider router={router} />
      <Toaster />
    </PostHogProvider>
  </StrictMode>,
)
