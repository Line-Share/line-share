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
      <div className="btn-group landing-page-btns" role="landing-page">
        <Link to = "/login">
          <button className="btn btn-light border border-dark">Log in</button>
        </Link>

        <Link to = "/signup">
          <button className="btn btn-light border border-dark">Sign Up</button>
        </Link>
      </div>
    </div>
    <img src = "https://www.miltonandking.com/au/wp-content/uploads/sites/2/2018/12/Wallpaper-Republic-Tipografia-1-4.jpg" id = "lg2"/>

    <h1 id = "p2H">Why Sketchify?</h1>
    <p>
      Sketchify is an interactive web based drawing app that gives users a wide array of functions that will allow them to make the things of their desire.
      Users can choose from a plethora of color options and due to the color slider and the color graph they can do so with ease. The features don't stop there as
      they also have the option to erase, undo, change brush stroke sizes, and clear the canvas. The main grab with Sketchify is the fact that you can share your work
      for others to see. This pushes Sketchify beyond the realm of canvas and drawing applications and goes into social media territory.
    </p>

    <img src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/p403x403/260625010_223154939932411_5112368953279855126_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WnKIbxg_pRIAX-M8ZG_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e47ad33627d13d36f23c1a675406dca5&oe=61C49032" id = "lg3" width = {720} height = {395.5}/>
    <div className="container-fluid row justify-content-evenly">
      <div className="col-4">
        <h1 id = "LPD1">Meet the Develepors</h1>
        <h2 className = "ourNames">Michael Orman</h2>
        <h3 className = "ourOccu">Full Stack Web Developer</h3>
        <p className = "ourBlurb">Hi, my name is Michael Orman, and I am a recent graduate from Fullstack Academy’s Web Development program.
        Prior to joining Fullstack Academy I was pursuing a Bachelor’s degree in Computer Information Systems and spending a lot of time outside
        of the classroom learning to code. I had taken a free online course from Harvard and fell in love with the process of building small apps.
        Being able to see my code run in a way that was visual inspired me to continue to learn to code. After the pandemic started, I noticed
        that the only way to stay connected with my friends from college was through technology, whether that be chatting with them over Discord,
        or playing games with them. A desire to build upon my practical skills and develop real-world applications that can help people connect
        across the world inspired me to enroll in a 17-week immersive coding boot camp over my Summer break. After graduating from Fullstack Academy,
        I have been continuing my degree program, as well as searching for internships and jobs at companies that focus on technologies that connect
        people.</p>
        <a className = "refLinks" href = "https://github.com/michaelorman61">GitHub</a>
        <a className = "refLinks" href = "https://www.linkedin.com/in/michaelorman61/">LinkedIn</a>
      </div>
      <div className="col-4">
        <h2 className = "ourNames">Syed Ali</h2>
        <h3 className = "ourOccu">Software Engineer</h3>
        <p className = "ourBlurb">Hi, my name is Syed Ali, and I am an aspiring Software engineer currently trying to obtain my undergraduate degree at
        The City College of New York. Through my adolescence I never considered software development a prospective career path for myself. However, since
        getting to college and working on my first few projects I’ve developed a hunger for expanding my horizons and becoming a better problem solver. I can
        vividly remember struggling to make a simple prime number checker in my freshman year of college and now here I am working on a project that is significantly
        more difficult than that in Sketchify. Although the road to this result was riddled with adversity, I am glad to have been part of this hackathon and am satisfied
        with the progress I’ve made as a programmer. Please feel free to connect with me on LinkedIn and take a look at my GitHub!
    </p>
          <a className = "refLinks" href = "https://github.com/syedcito">GitHub</a>
          <a className = "refLinks" href = "https://www.linkedin.com/in/syed-ali-15a8b81bb/">LinkedIn</a>
      </div>
    </div>


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
