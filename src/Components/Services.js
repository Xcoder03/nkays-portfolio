import React from 'react'
import '../Styles/style.css';

const Services = () => {
  return (
    <div className="Services" id="services">
         <div className="service-card">
              <span class="material-symbols-outlined">
                   bar_chart
             </span>
            <h2>Data Visualization</h2>
            <div className="card-holder">
               As a data analyst: I am responsible for Creating and editing visual content including maps, charts, and graphs.
               Transforming data sets, quantitative and qualitative analysis into compelling visuals. Providing visual, technical and editorial guidance.

            </div>
            <button>Learn More</button>
         </div>

         <div className="service-card">
         <span class="material-symbols-outlined">
               language
               </span>
            <h2>Web Development</h2>
            <div className="card-holder">
               Apart from data analysis, I also help small businesses, bloggers and 
               other clients create beautiful websites for their platform in other to scale up them their businesses and 
               attract more customers. 
            </div>
            <button>Learn More</button>
         </div>


         <div className="service-card">
         <span class="material-symbols-outlined">
          toc
          </span>
            <h2>Content Writer</h2>
            <div className="card-holder">
            Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.
            I write blogs on hashode.com on my journey
            </div>
            <button>Learn More</button>
         </div>
    </div>
  )
}

export default Services