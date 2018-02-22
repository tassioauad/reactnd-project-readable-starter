import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Icon, Input } from 'semantic-ui-react'

import CommentCount from './CommentCount'
import PostCardBody from './PostCardBody'
import PostCardTitle from './PostCardTitle'
import PostCardAuthor from './PostCardAuthor'
import PostActions from './PostActions'


export const PostCardInfo = (props) => {
  const { commentCount, body, title, author,category, id }  = props.post
  return (
    <Card.Content>
        <Card.Header><PostCardTitle title={title} category={category} id={id}/></Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          <PostCardAuthor author={author} /><CommentCount count={commentCount}/>
        </Card.Description>
      </Card.Content>
    // <div className="posts-card__info-container">
    //   <PostCardTitle title={title} category={category} id={id}/>
    //   <PostActions id={id} />
    //   <PostCardBody body={body} maxCharacters={140} />
    //   <footer className="posts-card__footer">
    //     <PostCardAuthor author={author} />
    //     <CommentCount count={commentCount}/>
    //   </footer>
    // </div>
  )
}

PostCardInfo.propTypes = {
  post: PropTypes.shape({ 
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    commentCount: PropTypes.number })
    .isRequired
}

PostCardInfo.displayName = 'PostCardInfo'

export default PostCardInfo
