import React from 'react';
import {adidasArr} from './Adidas'
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

export const Model = () => {
    const params = useParams()
    //     console.log('adidasArr: ', adidasArr)
    // console.log('paramsId: ', params.modelId)

    const selectedModel = adidasArr[Number(params.modelId) - 1]

    if (!selectedModel) {
        <Error404/>
    }

    return (
        <div style={{textAlign: 'center'}}>
            Model - одна компонента на все
            <h2>{selectedModel.model}</h2>
            <h3>{selectedModel.collection}</h3>
            <h4>{selectedModel.price}</h4>
            <img
                src={selectedModel.picture}
                alt={selectedModel.model}
                style={{width: '400px', height: 'auto', marginRight: '10px'}}
            />
        </div>
    );
};
