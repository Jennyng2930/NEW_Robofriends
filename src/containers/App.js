import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots'; 
import Scroll from '../components/Scroll';
import './App.css';


// in order to use State,we have to go back to our original way of React Component
class App extends Component {
    constructor() {
        super()
        this.state = {
            // declare the state:
            robots: [],
            searchfield: "",
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}))
    }

    onChangeSearch = (event) => {
        this.setState({searchfield: event.target.value})  /* update the search
        field */
    }

    render() {
        //destructuring, so we dun have to use this.state.robots... 
        const { robots, searchfield } = this.state; 

        const filteredRobots= robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (robots.length === 0) {
            return <h1 className="f1 dim tc"> Loading... </h1>
        } else {
            return (
                <div> 
                    <h1 className="f1 tc dim"> RoboFriends </h1>
                    <SearchBox searchChange={this.onChangeSearch}/>
                    <Scroll> 
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }   
    }
}
export default App;