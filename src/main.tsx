import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from "@mantine/core";
import {BrowserRouter} from "react-router-dom"
import { Provider} from "react-redux";
import { store } from './redux/store.ts';
import "@mantine/core/styles.css";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
      <MantineProvider>
        <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </Provider>
      </MantineProvider>
    
  </StrictMode>
);
