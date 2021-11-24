import React from 'react'
import { connect } from 'react-redux'
import { getAllPosts } from '../redux/post'

class Feed extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render(){
    return(

    )
  }
}

const mapState = state => {
  return {
    allPosts: state.posts
  }
}

const mapDispatch = dispatch => {
  return {
    getPosts() {
      dispatch(getAllPosts())
    }
  }
}

export default connect(mapState, mapDispatch)(Feed)
