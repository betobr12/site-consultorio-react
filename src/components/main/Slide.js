import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"



export default class Slide extends React.Component {
    render() {
        const images = [

          //colocar apenas imagens 1040x390
        
            {
                original: '/img/imagens/grande/11.jpg',
               // thumbnail: '/img/imagens/thumb/11.jpg',
              },

              {
                original: '/img/imagens/grande/13.jpg',
                
                //thumbnail: '/img/imagens/thumb/13.jpg',
              },         
        
            
          ];
          


        return (
            
            <ImageGallery 
              items={images} 
              autoPlay={true} 
              showThumbnails={false} 
              showFullscreenButton={false} 
              showPlayButton={false} 
              showNav={false} 
              slideInterval={8000}
              slideDuration={1400}
              
              
              
              />
            
        )
    }
}
