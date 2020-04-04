import React from "react";
import Layout from '../components/Layout';
import {useHover} from '../hooks'

const Home = () => {
  const [exampleRef, isHovered] = useHover();
  const [textRef, isTextHovered] = useHover();
  
  return (
    <Layout>
     <div ref={exampleRef} style={{fontSize:'30px'}}>
      {isHovered ? '😁' : '☹️'}
    </div>

    <hr/>

    <div ref={textRef} style={{fontSize:'30px'}}>

      <p>
      {isTextHovered ?  'Good Look ma friend' : 'Hover here to change this text.' }
      </p>
    
    </div>
    </Layout>
  );
};


export default Home;
