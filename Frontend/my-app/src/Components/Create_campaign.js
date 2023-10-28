import { React, useState, useEffect } from 'react';
import { imagedb } from './Firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import Integration from './web3Integration';


// take the props 
//<Route  path="/Create_campaign" element={<FirebaseImageUpload l={l} setl={setl}/>}></Route>

function FirebaseImageUpload({ l, setl }) {
  const [file, setimage] = useState('');
  const [imgurl, setimgurl] = useState([]);
  const [renderedImages, setRenderedImages] = useState([]);

  const Uploadclick = () => {
    const imgRef = ref(imagedb, 'files/$(');
    uploadBytes(imgRef, file);
  };

  useEffect(() => {
    listAll(ref(imagedb, 'files/')).then((imgs) => {
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setimgurl(data => [...data, url]);
        });
      });
    });
  }, []);

  // Only render the images when the `imgurl` state variable changes.
  useEffect(() => {
    const newRenderedImages = imgurl.map((dataVal) => (
      <div>
        <img src={dataVal} alt="image" height="200px" width="200px" />
      </div>
    ));
    setRenderedImages(newRenderedImages);
  }, [imgurl]);

  return (
    <div class="container d-flex flex-column justify-content-center align-items-center vh-50  ">
      <div className="App d-flex justify-content-center align-items-center flex-row mr-5" style={{ margin: '100px' }}>
        <div >
          <input type="file" onChange={(e) => setimage(e.target.files[0])} />
          <button class="btn btn-danger" >Upload</button>
        </div>
        <div>
          {renderedImages}
        </div>
      </div>
      <div>
        <Integration l={l} setl={setl} />
      </div>
  
    </div>
  );
}

export default FirebaseImageUpload;

