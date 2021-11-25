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
  <p>
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
