import React from 'react';

import './card.styles.css';

export const Card = props => {
   
    const deepCopyFunction = inObject => {
        let outObject, value, key
      
        if(typeof inObject !== "object" || inObject === null) {
          return inObject // Return the value if inObject is not an object
        }
      
        // Create an array or object to hold the values
        outObject = Array.isArray(inObject) ? [] : {}
      
        for (key in inObject) {
          value = inObject[key]
      
          // Recursively (deep) copy for nested objects, including arrays
          outObject[key] = (typeof value === "object" && value !== null) ? deepCopyFunction(value) : value
        }
        
        return outObject
      }

    let imgurl = deepCopyFunction(props.fruit.tfvname);
    imgurl = imgurl.toLowerCase();
    imgurl = imgurl.split(" ").join(""); 
    imgurl = imgurl.replace("almond","almondfruit");
    imgurl = imgurl.replace("banana","bananauk2");
    imgurl = imgurl.replace("tropicalalmondfruit","talmond1");
    imgurl = imgurl.replace("aubergine","aubermk");
    imgurl = imgurl.replace("cashewapple","cashewapp");
    imgurl = imgurl.replace("chilipepper","thaichili2");
    imgurl = imgurl.replace("dragonfruit","dragon");
    imgurl = imgurl.replace("fennel","fennelflr");
    imgurl = imgurl.replace("jambolan","jambu");
    imgurl = imgurl.replace("kiwi","kiwi3");
    imgurl = imgurl.replace("langsat","langsat1");
    imgurl = imgurl.replace("curryleaf","limda");
    imgurl = imgurl.replace("lychee","lychee2");
    imgurl = imgurl.replace("mango","kesarcut");
    imgurl = imgurl.replace("kesarcutsteen","mangosteencut");
    imgurl = imgurl.replace("neem","neemseed1");
    imgurl = imgurl.replace("olive","olive2");
    imgurl = imgurl.replace("passionfruit","passionyel");
    imgurl = imgurl.replace("peanut","peanutsplit");
    imgurl = imgurl.replace("pecan","pecantree");
    imgurl = imgurl.replace("pineapple","pineapple2");
    imgurl = imgurl.replace("pineapple2guava","feijoa");
    imgurl = imgurl.replace("rosemary","rosemaryflr");
    imgurl = imgurl.replace("sugarapple","sitafarcut");
    imgurl = imgurl.replace("turmeric","tumroot");
    imgurl = imgurl.replace("mung","mungseed");
    imgurl = imgurl.replace("curryleaf","limbdaseeds");
    imgurl = imgurl.replace("manilatamarind","mitiambli5");
    imgurl = imgurl.replace("sesame","sesameseeds");
    imgurl = imgurl.replace("sittu","sittu5");
    imgurl = imgurl.replace("borajujube","bora3");
    imgurl = imgurl.replace("arbi","arbiplant");

    return(
      <div className="card-container">
      <img alt={props.fruit.tfvname}
      src={`http://tropicalfruitandveg.com/images/${imgurl}.jpg`}/>
          <h2>{props.fruit.tfvname}</h2> 
      </div>);
};

