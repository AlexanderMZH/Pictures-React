import { useState } from "react";
import Search from "./components/inpunt/Inputs";
import Navigation from "./components/navigations/navigation";
import Pictures from "./components/pictures";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [serchedPictures, setSerchedPictures] = useState("");

  const handleSearch = async (inpuntValue) => {
    setSerchedPictures(inpuntValue);
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${inpuntValue}&per_page=24&format=json&nojsoncallback=1`
      );
      const data = await res.json();
      setData(data.photos.photo);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>SnapShot</h1>
      <Search handleSearch={handleSearch} />
      <Navigation handleSearch={handleSearch} />

      <div
        style={{
          margin: "20px",
        }}
      >
        {serchedPictures === "" ? null : (
          <span>{serchedPictures + " Pictures"}</span>
        )}
      </div>

      {loading ? <p>loading</p> : <Pictures data={data} />}
    </div>
  );
}

export default App;
