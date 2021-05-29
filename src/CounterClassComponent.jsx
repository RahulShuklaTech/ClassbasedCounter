import React from "react";

class CounterClassComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date().toDateString()
        }
        console.log("props",props.title)
    }

        // console.log('Rendered')
       increment = () => {
         this.setState({
             count: this.state.count +1
         })    
        
      
          };
        
       decrement = () => {
            if(this.state.count < 1){
              return;
            }
            this.setState({
                count: this.state.count -1
            })    
           
      
          };

    render(){
        return (
        <React.Fragment>
            <p>{this.title}</p>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>Add + </button>
            <button onClick={this.decrement}>Subtract - </button>
        </React.Fragment>
        )
}
}
export default CounterClassComponent