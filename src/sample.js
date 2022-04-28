import React, { Component } from 'react';
import { MeasuredContext } from "@fluentui/react";

class Sample extends Component {
    state = {  } 
    static contextType = MeasuredContext;
    render() { 
        // debugger
        // This is the context value we're trying to get
        console.log(this.context.isMeasured)
        return (
        <div>
            Some random text
        </div>
        );
    }
}
 
export default Sample;