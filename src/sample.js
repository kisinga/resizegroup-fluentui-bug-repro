import React, { Component } from 'react';

class Sample extends Component {
    state = {  } 
    
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