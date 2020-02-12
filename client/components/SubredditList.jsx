import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const Subreddit = (props) => (
  <div>
    {props.subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        date={(new Date(post.created_utc * 1000)).toString()}
        summary={post.selftext}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
