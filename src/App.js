
import React, { Component} from "react";
import CardList from './CardList'
import SearchBox from "./SearchBar";
import Scroll from "./scroll";



class App  extends Component {
    constructor() {
     super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users})
        )  
    }

        onSearchChange=(event)=>{
            this.setState({searchfield: event.target.value})
         }
    
          render() {
            const {robots, searchfield} = this.state
        const filteredRobots =robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield)
       })
       return !robots.length ?  <h1>Loading Robots</h1> :

         (
            <div className="tc">
                <h1 className="f1">Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
       }
    }




export default App;
