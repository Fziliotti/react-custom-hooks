import {useBattery, useGeolocation, useMedia, useMediaDevices, useOrientation, useWindowScroll} from 'react-use';
import React, {useRef} from "react";
import Layout from '../components/Layout'


const UseReactUseLibraryView = () => {
  const batteryState = useBattery();
  const state = useGeolocation();
  const isWide = useMedia('(min-width: 1300px)');
  const devicesInfo = useMediaDevices(); //tracks connected hardware devices
  const orientationInfo = useOrientation();

  const {x, y} = useWindowScroll();

  if (!batteryState.isSupported) {
    return (
      <Layout>
      <div>
        <strong>Battery sensor</strong>: <span>not supported</span>
      </div>
      </Layout>
    );
  }

  if (!batteryState.fetched) {
    return (
      <Layout>
      <div>
        <strong>Battery sensor</strong>: <span>supported</span> <br />
        <strong>Battery state</strong>: <span>fetching</span>
      </div>
      </Layout>
    );
  }

  return (
    <Layout>

      <h1>Window Scroll</h1>
      <div>x: {x}</div>
      <div>y: {y}</div>
      
      <hr/>

      <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
      <strong>Battery state</strong>: <span>fetched</span> <br />
      <strong>Charge level</strong>:&nbsp;&nbsp; <span>{ (batteryState.level * 100).toFixed(0) }%</span> <br />
      <strong>Charging</strong>:&nbsp;&nbsp; <span>{ batteryState.charging ? 'yes' : 'no' }</span> <br />
      <strong>Charging time</strong>:&nbsp;&nbsp;
      <span>{ batteryState.chargingTime ? batteryState.chargingTime : 'finished' }</span> <br />
      <strong>Discharging time</strong>:&nbsp;&nbsp; <span>{ batteryState.dischargingTime }</span>

      <hr/>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>

      <hr/>

      <div>
        Screen is wide: {isWide ? 'Yes' : 'No'}
      </div>

      <hr/>

      <pre>
        {JSON.stringify(devicesInfo, null, 2)}
      </pre>

      <hr/>

      <pre>
        {JSON.stringify(orientationInfo, null, 2)}
      </pre>

      <hr/>




    </Layout>
  );
};



export default UseReactUseLibraryView;

