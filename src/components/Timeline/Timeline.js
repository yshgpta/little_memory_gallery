import React, { Component } from 'react';
import SVG from 'react-svg-draw'


import img1998 from '../../images/1998.jpg'
import img2001 from '../../images/2001.jpg'
import img2002 from '../../images/2002.jpg'
import img2004 from '../../images/2004.jpg'
import img2006 from '../../images/2006.jpg'
import img2008 from '../../images/2008.jpg'
import img2016 from '../../images/2016.jpg'
import img2018 from '../../images/2018.jpg'
import img2018_2 from '../../images/2018-2.jpg'



import './Timeline.css'


declare var $JssorSlider$;
declare var $JssorEasing$;
declare var $JssorSlideshowFormations$;
declare var $JssorSlideshowRunner$;
declare var $JssorBulletNavigator$;
declare var $JssorArrowNavigator$;
declare var $JssorThumbnailNavigator$;
declare var $JssorCaptionSlideo$;


class Timeline extends Component {
  componentDidMount() {
    (function (containerId) {
        /*
          Transition Reference: http://www.jssor.com/development/tool-slideshow-transition-viewer.html
        */


        var options ={
          $Align: 0,
          $AutoPlay: 1,
          $DragOrientation: 2,
          $PlayOrientation: 2,
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $Orientation: 2
          }
        };

        new $JssorSlider$(containerId, options);
    })('slider1_container');
  }

  render() {
    return (
      <div className='section-1'>
      <div className='timeline'>
        <p>My Timeline</p>
      </div>
      <div className='slider' id="slider1_container" style={{position:'relative',margin:'0 auto',width:'800px',height:'450px',overflow:'hidden'}}>
          <div data-u="slides" style={{position:'relative',top:'0px',left:'0px',width:'800px',height:'450px',overflow:'hidden'}}>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img1998}/></span><span className='year' style={{position:'absolute',top:'27%',fontSize:'1.7rem'}}>1998</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2001}/></span><span className='year' style={{position:'absolute',top:'32%',fontSize:'1.7rem'}}>2001</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2002}/></span><span className='year' style={{position:'absolute',top:'37%',fontSize:'1.7rem'}}>2002</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2004}/></span><span className='year' style={{position:'absolute',top:'42%',fontSize:'1.7rem'}}>2004</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2006}/></span><span className='year' style={{position:'absolute',top:'47%',fontSize:'1.7rem'}}>2006</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2008}/></span><span className='year' style={{position:'absolute',top:'52%',fontSize:'1.7rem'}}>2008</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2016}/></span><span className='year' style={{position:'absolute',top:'57%',fontSize:'1.7rem'}}>2016</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2018}/></span><span className='year' style={{position:'absolute',top:'62%',fontSize:'1.7rem'}}>2018</span></div>
              <div><span className='slider-image'><img data-u="image" alt='ASD' src={img2018_2}/></span><span className='year' style={{position:'absolute',top:'67%',fontSize:'1.7rem'}}>2018</span></div>
          </div>
        <div style={{position:'absolute',left:'0',top:'0',width:'750px',height:'450px'}}>
        <div data-u="navigator" className="jssorb031" style={{position:'absolute',top:"50%",right:'12px',transform:'translateY(-50%)'}} data-autocenter="2" data-scale="0.5" data-scale-right="0.75">
            <div data-u="prototype" className="i" style={{width:'12px',height:'12px'}}>
                <SVG viewbox="0 0 16000 16000" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}>
                  <circle className="b" cx="5" cy="5" r="5"/>
                </SVG>
            </div>
        </div>
       </div>
      </div>
      </div>
    )
  }
}
export default Timeline;
