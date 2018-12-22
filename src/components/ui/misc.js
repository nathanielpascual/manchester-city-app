import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = (props) => {

    const template = <div 
                        style={{
                            background:props.background,
                            color:props.color,
                            fontSize:props.size,
                            margin: props.margin? props.margin : '0',
                            border: props.border? props.border : '0',
                            padding:'5px 10px',
                            display:'inline-block',
                            fontFamily:'Righteous'    
                        }}>
                        {props.children}
                        </div>

    if(props.link){
        return (
            <Link to={props.linkTo}>
                {template}
            </Link>
        )
    }
    else
    {
        return template;
    }
};

export const Looper = (snapshot) => {
    let array = [];

    snapshot.forEach((child)=>{
        array.push({
            id:child.key,
            ...child.val()
        });
    });

    return array;
};

export const ReverseArray=(array)=>{
    let reversedArray = [];

    for(let i=array.length-1;i>=0;i--)
    {
        reversedArray.push(array[i]);
    }
    return reversedArray;
};
