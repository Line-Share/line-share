import React from 'react'
import { connect } from 'react-redux'
import { getAllPosts, _getAllPosts } from '../redux/post'
import regeneratorRuntime from 'regenerator-runtime';

class Feed extends React.Component {
  async componentDidMount() {
    await this.props.getPosts();
  }

  async componentWillUnmount() {
    await this.props.clearPosts();
  }
  render(){

      return (
        this.props.allPosts.length ?
        (<React.Fragment>
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
        </React.Fragment>) : (
          <div> loading </div>
        )
      )
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
    },
    clearPosts(){
      dispatch(_getAllPosts([]))
    }
  }
}

export default connect(mapState, mapDispatch)(Feed)
