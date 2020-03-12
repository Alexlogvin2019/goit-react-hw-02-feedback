import React from 'react'


function Section(props) {
      return (
        <>
        <h2>{props.header}</h2>
        {props.children}
        </>
      );
    }
    
    export default Section;
    