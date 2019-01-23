import React, { Component } from 'react';
import './App.css';
import 'aframe';
import Assets from 'aframe-react-assets';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene, Entity, Camera} from 'react-aframe-ar';

import normalMap from "./assets/textures/earth_map.jpg";
import bumpMap from "./assets/textures/earth_map.jpg";

class App extends Component {

  static Assets = [
    <img id="noramlMap" src={normalMap} alt="normalMap"/>
  ];

  updateAssetsLoadingStatus = () => {
    this.setState({ initialLoading: false })
  };

  updateAssetsCurrentInfo = () => null;
  updateAssetsLoadingInfo = () => null;

  render() {

    const {assets} = this.props;

    return (
      <div className="App">
          <Scene>
              <Assets
                  assets={assets}
                  timeout={4e4}
                  interval={500}
                  debug={false}
                  onLoad={this.updateAssetsLoadingStatus}
                  onLoadingBySize={this.updateAssetsCurrentInfo}
                  onLoadingByAmount={this.updateAssetsLoadingInfo}
              />
              <Camera position="0 0 8" look-controls="enabled: false"/>
              <Entity geometry={{
                primitive: 'sphere',
                radius: 5,
                segments: 256,
                color: "#E8E8E8"
              }}
                  position="0 0 0"
                  normal-map={normalMap}
                  displacement-map={bumpMap}
                  displacement-bias={0}
                  displacement-scale={-.2}
                  look-controls
              />
              <Sphere position="0 0 0" radius="4"
                      segments={256}
                      shadow
                      normal-map={normalMap}
                      displacement-map={bumpMap}
                      displacement-bias={0}
                      displacement-scale={-.2}
                      look-controls
              />
              <Sky color="#ffffff" />
          </Scene>
      </div>
    );
  }
}

export default App;
