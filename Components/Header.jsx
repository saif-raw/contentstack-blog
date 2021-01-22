import React, { Component } from 'react'

export default function Header (props) {
    
        let header = props.header[0][0];
        console.log(props.header);
        return (
            <div>
                {/* <h1>{header.about.title}</h1> */}
                {/* <h1>{header.home.title}</h1> */}
            </div>
        )
    }
