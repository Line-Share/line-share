import React from 'react'
import { connect } from 'react-redux'
import { getAllPosts } from '../redux/post'

class Feed extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render(){
    if(!this.props.allPosts){
      return <div>loading</div>
    }
    else{
      return(
        <React.Fragment>
          <img src="https://www.miltonandking.com/au/wp-content/uploads/sites/2/2018/12/Wallpaper-Republic-Tipografia-1-4.jpg" id="bg" />
          <div className="container-fluid col" id="post-container">
            {this.props.allPosts.map((post) => {
              return(
                <div key={post.postId} className="card mx-auto">
                  <img src={post.imageUrl} className="card-img-top" />
                  <h5 className="card-title">{post.user.username}</h5>
                  <p className="card-text">{post.caption}</p>
                </div>
              )
            })}
          </div>
        </React.Fragment>
      )
    }
  }
}

const mapState = state => {
  return {
    allPosts: state.post
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
