import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCdoeLink from 'qrcode';

import './App.css'

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleQrcode(event) {
    setLink(event.target.value);
    handleGenerate(event.target.value);
  }

  function handleGenerate(link_url) {
    QRCdoeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function(err, url) {
      setQrcodeLink(url);
    })
  }

  return (
    <div className='container'>

      <QRCode
        value={link}
      />

      <input
        className="input"
        placeholder="Digite seu link"
        value={link}
        onChange={ (event) => handleQrcode(event)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QRCode</a>

    </div>
  );
}

export default App;