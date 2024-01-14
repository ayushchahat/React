import React from "react";

const Hello =() => {
    // React component with using JSX
    // return(
    //     <div>
    //         <h1>
    //             Hello Nitu
    //         </h1>
    //     </div>
    // )
    // React component without using JSX
    return React.createElement(
        'div',
        {id: 'hello',className: 'dummyClass'},
        React.createElement('h1',null,'Hello Vishwas')
    )
}

export default Hello;