import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { routes } from './routes/index.jsx'
import { ThemeProvider, LanguageProvider } from './context/index.js'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <LanguageProvider>
            <RouterProvider router={routes} />
        </LanguageProvider>
    </ThemeProvider>,
)
