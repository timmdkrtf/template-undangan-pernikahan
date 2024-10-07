import QRCode from  "../assets/image/icon/Qr-Code.png"

import LeafLeft from "../assets/image/elemen/leaf-tall-white-left.png"
import LeafRight from "../assets/image/elemen/leaf-tall-white-right.png"

function Gift(){
    return(
        <div className="gift" id="gift">
            <div className="container">
                <div className="title">
                    <h1>Gift</h1>
                    <p>Jika memberi adalah sebagai ucapan terima kasih anda, anda dapat memberikan kado berupa cardless dengan mengirim hadiah digital, dibawah ini</p>
                </div>
                <div className="gift-content">
                    <div className="qr">
                        <h5>Gopay - 012863271</h5>
                        <img src={QRCode} alt="" />
                    </div>
                    <div className="qr">
                        <h5>Gopay - 012863271</h5>
                        <img src={QRCode} alt="" />
                    </div>
                </div>
                <div className="family">
                    <p>Kami yang berbahagia</p>
                    <h2>Keluarga dari Tara & Keluarga dari Sumi</h2>
                </div>
            </div>
            <div className="leaf-img">
                <img src={LeafLeft} className="left" alt="" />
                <img src={LeafRight} className="right" alt="" />
            </div>
        </div>
    );
}

export default Gift;