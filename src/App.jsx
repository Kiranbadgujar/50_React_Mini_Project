import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from './components/random-color';
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator"
import Typewriter from "./components/typewrite-effect"
import StickyFullPageSlide from "./components/Sticky fullpage pages slides"


function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* ImageSlider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      /> */}

      {/* LoadMoreData component */}
      <LoadMoreData />

      {/* RandomColor component */}
      <RandomColor />

      {/* StarRating component */}
      <StarRating />

      {/* TreeView component */}
      <TreeView menus={menus}/>

      {/* QRCodeGenerator component */}
      <QRCodeGenerator />

      {/* Typewriter Effect */}
      <Typewriter />

      {/* StickyFullPageSlide component */}
      <StickyFullPageSlide />

    </div>
  );
}

export default App;
