
import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const loading = require('../../../../assets/loading.gif');

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },
  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  loadingImage: {
    width: 60,
    height: 60
  }
};

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
};

export default class MySwiper extends Component {
  constructor (props) {
    super(props);
    this.state = {
      imgList: [
        'http://empirecollege.net/pics/1.jpg',
        'http://empirecollege.net/pics/2.jpg',
        'http://empirecollege.net/pics/3.jpg',
        'http://empirecollege.net/pics/4.jpg'
      ],
      loadQueue: [0, 0, 0, 0]
    };
    this.loadHandle = this.loadHandle.bind(this);
  }

  loadHandle (i) {
    let loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue
    });
  }

  render () {
    return (
        <View style={{flex: 1}}>

          {/*<Swiper loadMinimal loadMinimalSize={1} style={{flex: 1}}  autoplay>*/}
          <Swiper loadMinimal loadMinimalSize={1} autoplay>
            {
              this.state.imgList.map((item, i) => <Slide
                  loadHandle={this.loadHandle}
                  loaded={!!this.state.loadQueue[i]}
                  uri={item}
                  i={i}
                  key={i} />)
            }
          </Swiper>

        </View>
    )
  }
}

