import React, { useState,useEffect } from "react";
import CaseSelector from "../CaseSelector";
import SizeSelector from "../SizeSelector";
import BandSelector from "../BandSelector";
import CollectionSwitcher from "../CollectionSwitcher";
import WatchPreview from "../WatchPreview";
import PriceCalculator from "../PriceCalculator";
import SaveShare from "../SaveShare";
import ImageSlider from "../ImageSlider"
import { watchData } from "../data";

import "./index.css"

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [isFrontView,setFrontView] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState("Apple Watch Series 10"); 

  const handleCaseSelect = (caseItem) => setSelectedCase(caseItem);
  const handleSizeSelect = (size) => setSelectedSize(size);
  const handleBandSelect = (band) => setSelectedBand(band);
  const handleCollectionSwitch = (collection) => setSelectedCollection(collection);
  const casePrize = selectedCase ? (selectedCase.material === "Titanium" ? 100 : 0) : 0 
  const bandPrize  = selectedBand ? selectedBand.price : 0 
  console.log(casePrize)
  console.log(bandPrize) 

  useEffect(() => {
    setSelectedBand(null)
  },[selectedCollection])

  

  return (
    <div className="customization-page">
      <nav className='nav-styling'>
            <a href="https://www.apple.com/shop/buy-watch/apple-watch" >
            <img src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1734954726/header_images_apple_watches_swxgrm.jpg" alt="Apple Watch"  width="80" height="18"  />
            </a>
            <div className="collection-save-container">
                <CollectionSwitcher
                    collections={watchData.collections}
                    onSwitch={handleCollectionSwitch}
                />
                <SaveShare  selectedCase={selectedCase}
                    selectedBand={selectedBand}
                    selectedSize={selectedSize}
                />
            </div>
      </nav>
      <div className="watch-studio">
        {
            watchData.watchCollections.map(
                (eachItem) => {
                    if (eachItem.name === selectedCollection){
                    return(
                    <>
                      <>
                        {
                          !selectedBand ? (
                            <>
                            <div className="image-container">
                              <img src={isFrontView ? `${eachItem.frontview}` : `${eachItem.sideview}`} className="active"/>
                            </div>
                            <button onClick={() => setFrontView(!isFrontView)} className="views-styling">{isFrontView ? "Side View" : "Front View"}</button>
                            </> 

                          ) : <ImageSlider/>
                        }
                      </>
                      <>
                      <p className="watch-content-styling">{eachItem.name.toUpperCase()}</p>
                      <p className="price-styling">From ${eachItem.price + casePrize + bandPrize}</p>  
                      <WatchPreview
                        selectedCase={selectedCase}
                        selectedSize={selectedSize}
                        selectedBand={selectedBand}
                      />
                      </>
                    </>

                )}}
            )

        }

      </div>
      <div className="customization-workflow">
        <SizeSelector sizes={watchData.sizes} onSelect={handleSizeSelect} />
        <CaseSelector cases={watchData.cases} onSelect={handleCaseSelect} />
        <BandSelector bands={watchData.bands} onSelect={handleBandSelect} />
      </div> 
    </div>
  );
};

export default CustomizationPage;
