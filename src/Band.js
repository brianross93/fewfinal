import React from 'react';
import data from './metal.json';
import Like from './Like';
import './Band.css';



function Band(props) {
    
    const band_info = data.map(({ band_name, fans, formed, origin,split,style }, i) => {
    return (
        <div className="Band">
        <h1>{ band_name}</h1>
        <p>Fans : { fans }</p>
        <p>Formed: { formed }</p>
        <p>Origin: { origin }</p>
        <p>Split: { split }</p>
        <p>Style: {style}</p>
           <Like />
        </div>
        

    )
    }) 
    return (
        
        <div className="Bands">
          { band_info }
        </div>
        
        
      )
}

    // "ID": 48,
    //   "band_name": "Porcupine Tree",
    //   "fans": 1094,
    //   "formed": "1987",
    //   "origin": "United Kingdom",
    //   "split": "-",
    //   "style": "Progressive rock,Progressive"

    export default Band

