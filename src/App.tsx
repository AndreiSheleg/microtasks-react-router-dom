import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация:
                    <div><NavLink to={'/page-1'} className={({isActive}) => isActive ? styles.active : styles.navLink } >-Page-1</NavLink></div>
                    <div><NavLink to={'/page-2'} className={({isActive}) => isActive ? styles.active : styles.navLink }>-Page-2</NavLink></div>
                    <div><NavLink to={'/page-3'} className={({isActive}) => isActive ? styles.active : styles.navLink }>-Page-3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={'/page-1'}/>}/>

                        <Route path="/page-1" element={<PageOne/>}/>
                        <Route path="/page-2" element={<PageTwo/>}/>
                        <Route path="/page-3" element={<PageThree/>}/>
                        <Route path="/error404" element={<Error404/>}/>

                        <Route path="/*" element={<Navigate to={'/error404'} />}/>

                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
