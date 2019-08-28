import React, {Component} from 'react'
import '../App.css'
import data from '../data.js'

export default class Body extends Component {
    constructor() {
        super()

        this.state = {
            pageNumber: 1,
            currentId: 0
        }
    }

    handlePrevious(e){
        if (this.state.currentId > 0) {
            this.setState({
                pageNumber: this.state.pageNumber-1,
                currentId: this.state.currentId-1
            })
        }
    }

    handleNext(){
        if (this.state.currentId < data.length -1) {
            this.setState({
                pageNumber: this.state.pageNumber+1,
                currentId: this.state.currentId+1
            })
        }
    }

    render() {
        let name = <h1 key='name'>{data[this.state.currentId].name.first} {data[this.state.currentId].name.last}</h1>
        let from = `${data[this.state.currentId].city}, ${data[this.state.currentId].country}`
        let jobTitle = `${data[this.state.currentId].title}`
        let employer = `${data[this.state.currentId].employer}`
        let movies = data[this.state.currentId].favoriteMovies.map((el, i) => {
            return <li key={i}>{el}</li>
        })

        console.log(data)
        return(
                <div className="body">
                    <div className="infoHolder">
                        <div className="info">
                            <br/>
                            {name}
                            <br/>
                            <h2>From: {from}</h2>
                            <h2>Job Title: {jobTitle}</h2>
                            <h2>Employer: {employer}</h2>
                            <br/>
                            <h2>Favorite Movies: {this.state.favoriteMovies}</h2>
                            <ol>
                                {movies}
                            </ol>
                        </div>
                        <div className="pageNumber">
                            <h1 className='number'>{this.state.pageNumber}/{data.length}</h1>
                        </div>
                    </div>
                    <div className="controlHolder">
                        <div className="previous">
                            <h2 onClick={() => this.handlePrevious()}>{'< Previous'}</h2>
                        </div>
                        <div className="manipulateList">
                            <button className="myButton">Edit</button>
                            <button className="myButton">Delete</button>
                            <button className="myButton">New</button>
                        </div>
                        <div className="next">
                            <h2 onClick={()=> this.handleNext()}>{'Next >'}</h2>
                        </div>
                    </div>
                </div>
        )
    }
}