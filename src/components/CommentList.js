import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
    renderComments() {
        // eslint-disable-next-line array-callback-return
        return this.props.comments.map((comment, i) => {
            return <li key={i}>{comment}</li>
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)

