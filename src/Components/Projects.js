import React from 'react'
import '../Styles/style.css';

const Projects = () => {
  return (
    <div className="Project" id="project">
     
        <div className="projects">
          <div className="image-holder">
            <img src="https://i.pinimg.com/originals/ee/92/d1/ee92d19eca049650e377e9d3858c5bbe.png"/>
          </div>
          <a href="http://">TripsFood</a>
        </div>

        <div className="projects">
          <div className="image-holder">
            <img src="https://www.upgrad.com/blog/wp-content/uploads/2020/06/screenshot-www.behance.net-2020.06.23-12_16_45.png"/>
          </div>
          <a href="http://">Advances in space</a>
        </div>

        <div className="projects">
          <div className="image-holder">
            <img src="https://www.upgrad.com/blog/wp-content/uploads/2020/06/screenshot-www.behance.net-2020.06.23-12_19_44.png"/>
          </div>
          <a href="http://">Stellar</a>
        </div>
    </div>
  )
}

export default Projects