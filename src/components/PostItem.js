import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newPost } from '../actions/postActions'

export class PostItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }
    }

    submitHandler = e => {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.newPost(post)

    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>Title: </label>
                        <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} type="text" />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <textarea value={this.state.body} onChange={e => this.setState({ body: e.target.value })}></textarea>
                    </div>
                    <br />
                    <button onClick={e => this.submitHandler(e)} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostItem.propTypes = {
    newPost: PropTypes.func.isRequired
}


export default connect(null, { newPost })(PostItem)
