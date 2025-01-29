import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import s from '../header/Header.module.scss'

export default function Header(){
    return(
        <BrowserRouter>
        <header className={s.header}>
            <section className={s.Logomarca}>
                <img src="" alt="" />
            </section>

        </header>
        <nav className={s.Navheader}>
            <ul>
                <li>
                    <Link className={s.link} to='/'>Inicio</Link>
                </li>
            </ul>
        </nav>
        
        
        <Routes>
        <Route path="/" element={<Inicio />} />
        </Routes>
        </BrowserRouter>

    )

}