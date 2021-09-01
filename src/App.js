
// import landing_pagehd from './landing_pagehd.gif';
import './App.scss';
import ImageMap from "image-map";

import { useEffect } from 'react';

import Svganimation from './svganimation';

function App() {
  useEffect(() => {
    ImageMap('img[usemap]', 500)
  })

 

  return (
    <div className="App">
     
     <Svganimation/>


      {/* <img useMap="#image-map" src={landing_pagehd} className="landing-page"/>
      
 <map name="image-map">
 <area alt="" title="stackblitz"href="https://stackblitz.com/"  coords="525,180,24" shape="circle"/>
    <area target="_blank" alt="" title="" href="https://stackblitz.com/" coords="361,196,31" shape="circle"/>
    <area target="_blank" alt="" title="" href="https://angular.io/" coords="420,77,22" shape="circle"/>
    <area target="_blank" alt="" title="" href="https://reactjs.org/" coords="216,240,19" shape="circle"/>
    <area target="_blank" alt="" title="" href="https://vuejs.org/" coords="287,314,23" shape="circle"/>
    <area target="_blank" alt="" title="" href="https://nodejs.org/en/" coords="576,303,23" shape="circle"/>
   </map> */}
    </div>
  );
}

export default App;
