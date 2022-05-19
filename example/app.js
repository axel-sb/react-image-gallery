import React from 'react';
import ReactDOM from 'react-dom';

import ImageGallery from 'src/ImageGallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
]

class App extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}



ReactDOM.render(<App/>, document.getElementById('root'));
