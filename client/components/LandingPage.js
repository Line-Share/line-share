import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () =>{
  return(
    <div>
    <img src = "http://cdn.shopify.com/s/files/1/0849/4704/files/First-image_Fb-size_grande.jpg?10773543754915177139" id = "lg"/>
    
    <div id = "LandingPageMain">
  <h1 id = "LandingPageMainHeading">
    <div>Sketch,</div>
    <div>Save,</div>
    <div>Share.</div>
  </h1>
  <p id = "LandingPageMainBlurb">
    <div>
    Sketchify is different from other canvas applications in the fact that it provides the user 
    </div>
    <div>
    with a platform to share their creations and see what others are doing around the world.
    </div>
  </p>

  <Link to = "/login">
  <button>Log in</button>
  </Link>

  <Link to = "/signup">
  <button>Sign Up</button>
  </Link>
  </div> 
  <img src = "https://www.miltonandking.com/au/wp-content/uploads/sites/2/2018/12/Wallpaper-Republic-Tipografia-1-4.jpg" id = "lg2"/>
    
    <h1 id = "p2H">Why Sketchify?</h1>
    <p>
      Sketchify is an interactive web based drawing app that gives users a wide array of functions that will allow them to make the things of their desire. 
      Users can choose from a plethora of color options and due to the color slider and the color graph they can do so with ease. The features don't stop there as 
      they also have the option to erase, undo, change brush stroke sizes, and clear the canvas.
    </p>

    <img src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/p403x403/260625010_223154939932411_5112368953279855126_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WnKIbxg_pRIAX-M8ZG_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e47ad33627d13d36f23c1a675406dca5&oe=61C49032" id = "lg3" width = {720} height = {395.5}/>


  </div> 
 

  
  
  
    )
}


// class LandingPage extends React.Component {
//   render() {
//     return(
//       <div>
//         hello world
//       </div>
//     )
//   }
// }


export default LandingPage
