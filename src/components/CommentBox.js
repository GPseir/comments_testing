import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.saveComment(this.state.comment)
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2 className='addComment'>Add a Comment</h2>
                    <textarea
                        placeholder='Write a comment'
                        className='textarea'
                        onChange={this.handleChange}
                        value={this.state.comment} />
                    <br />
                    <br />
                    <br />
                    <div>
                        <button className='ui secondary button'>Submit Comment</button>
                    </div>
                </form>
                <br />
                <button className='fetch-comments ui primary button' onClick={this.props.fetchComments}>Fetch Comments</button>
                <br />
                <br />
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox)
