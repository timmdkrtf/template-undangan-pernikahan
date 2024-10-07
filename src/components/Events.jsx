import Building from "../assets/image/icon/Building.png"
import Camera from "../assets/image/icon/Camera.png"
import Food from "../assets/image/icon/Food.png"
import Party from "../assets/image/icon/Party.png"
import Parking from "../assets/image/icon/Outdoor-Parking.png"

import Flower from "../assets/image/elemen/flower-big2.png"

function Events(){
    return(
        <div className="event" id="event">
            <div className="container">
                <div className="title">
                    <img src={Flower} alt="" />
                    <h1>Event Attractions</h1>
                </div>
                <div className="content-event">
                    <div className="card-content">
                        <img src={Building} alt="" />
                        <h4>Accommodation</h4>
                        <p>This is a short description elaborating the service you have mentioned above.</p>
                    </div>
                    <div className="card-content">
                        <img src={Camera} alt="" />
                        <h4>Documentation</h4>
                        <p>This is a short description elaborating the service you have mentioned above.</p>
                    </div>
                    <div className="card-content">
                        <img src={Food} alt="" />
                        <h4>Prasmanan Food</h4>
                        <p>This is a short description elaborating the service you have mentioned above.</p>
                    </div>
                    <div className="card-content">
                        <img src={Parking} alt="" />
                        <h4>Parking Area</h4>
                        <p>This is a short description elaborating the service you have mentioned above.</p>
                    </div>
                    <div className="card-content">
                        <img src={Party} alt="" />
                        <h4>Main Event</h4>
                        <p>This is a short description elaborating the service you have mentioned above.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Events;