/*
    1. import axios
    2. create a state property array and initialize to empty array
    3. add componentDidMount() life cycle method
       call axios.get() method
    4. axios is a promise based library
       add then and catch block
    5. check the error block
*/

import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }
    
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMsg: 'Error retrieving data ...'
            })
        })
    }

    render() {
        const {posts, errorMsg } = this.state
        return (
            <div>
                <h1>List of posts</h1>
                {
                    posts.length ?
                    posts.map(post => <div id={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errorMsg ?
                    <div>{errorMsg}</div> :
                    null
                }
            </div>
        )
    }
}

export default PostList

