import React from "react";

const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.component {
        render(){
           return <OriginalComponent name='Vishwas' />
        }
    }
    return NewComponent
}

export default UpdatedComponent