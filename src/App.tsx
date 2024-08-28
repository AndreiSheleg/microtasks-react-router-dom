import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import styled from "styled-components";
import {S} from './components/pages/_styles'
import {Model} from "./components/pages/Model";
import adidasModel1 from "./assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasModel2 from "./assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasModel3
    from "./assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import pumaModel1
    from "./assets/sneakersy-puma-puma-r78-cobalt-glaze-393910-06-cobalt-glaze-puma-navy-for-all-time-red-0000303330477.webp";
import pumaModel2 from "./assets/sneakersy-puma-st-runner-v4-sd-399665-04-brazowy-0000303895471.webp";
import pumaModel3 from "./assets/sneakersy-puma-smash-3-0-year-of-sports-397484-01-zielony-0000303895037.webp";

export type ModelType = {
    id: number,
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: ModelType[] = [
    {
        id: 1,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,
    },
    {
        id: 2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: 3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]
export const pumaArr: ModelType[] = [
    {
        id: 1,
        model: 'PUMA QWERTY',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,
    },
    {
        id: 2,
        model: 'PUMA ASDFGHJ',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'PUMA ZXCVBNM',
        collection: 'new collection333',
        price: '300400$',
        picture: pumaModel3
    }
]

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',

} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация:
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>-Adidas-</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>-Puma-</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>-Abibas-</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={'/adidas'}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas dataArr={adidasArr}/>}/>
                        <Route path={PATH.PAGE2} element={<Puma dataArr={pumaArr}/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={'/adidas/:modelId'} element={<Model dataArr={adidasArr}/>}/>
                        <Route path={'/puma/:modelId'} element={<Model dataArr={pumaArr}/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

