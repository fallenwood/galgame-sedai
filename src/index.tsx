/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import { App } from './App.tsx'
import { Toaster } from "solid-sonner";

const root = document.getElementById('root')

render(
    () => <>
        <App />
        <Toaster />
    </>,
    root!)
