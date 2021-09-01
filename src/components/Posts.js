import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
export class Posts extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        if (this.props.post.title) {
            this.props.posts.unshift(this.props.post)
        }
        return (
            <div>
                <h1>Posts</h1>
                {this.props.posts && this.props.posts.map(post => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    post: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)