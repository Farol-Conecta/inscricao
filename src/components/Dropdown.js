import React from 'react';

class DropDown extends React.Component {
    state = {
        values: []
    }
    componentDidMount() {
       fetch('http://localhost:8080/values')
        .then(function(res) {
            return res.json();
        }).then((json)=> {
            this.setState({
               values: json
            })
        });
    }
    render(){
        return <select>{
                 this.state.values.map((obj) => {
                     return <option value={obj.id}>{obj.name}</option>
                 })
              }</select>            
    }
}

export default DropDown;