import React, { Component } from 'react';


class CodeSnippet extends Component {

  render(){
    let number = 15000000;
    return(
      <div>
        <pre>
          {`
            <h1>hello</h1>
            h1 {
              position:absolute;
              left: `}{number}{`;
            }

            Hello     ,
            World     .
          `}
        </pre>

      </div>
    )
  }
}

export default CodeSnippet;
