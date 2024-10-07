 import LeafTallCream from "../assets/image/elemen/leaf-tall-story.png"
 import Introduction from "../assets/image/bg/story1.png"
 import Taaruf from "../assets/image/bg/story2.png"
 import Wedding from "../assets/image/bg/story3.png"

 import Flower1 from "../assets/image/elemen/flower-big1.png"
 import Flower2 from "../assets/image/elemen/flower-big2.png"
 import Flower3 from "../assets/image/elemen/flower4.png"

 function Story(){
    return(
        <div className="story" id="story">
            <div className="container">
                <div className="title">
                    <img src={LeafTallCream} alt="leaf tall cream png" />
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil saepe neque repellat. Animi impedit, ad quas nihil quisquam esse quibusdam asperiores.</p>
                </div>
                <div className="content-story">
                    <div className="story-card first">
                        <img src={Introduction} alt="image story 1" />
                        <div className="text">
                            <h2>Perkenalan (2020)</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, doloremque quisquam. Quo ex accusantium ullam a illo magni harum laudantium.</p>
                            <img src={Flower1} alt="" />
                        </div>
                    </div>
                    <div className="story-card second">
                        <img src={Taaruf} alt="image story 2" />
                        <div className="text">
                            <h2>Taaruf (2022)</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos modi, dicta adipisci quidem quis est temporibus. Accusantium aliquid omnis veritatis.</p>
                            <img src={Flower3} alt="" />
                        </div>
                    </div>
                    <div className="story-card third">
                        <img src={Wedding} alt="image story 3" />
                        <div className="text">
                            <h2>Pernikahan (Now)</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non inventore quis porro dolor quisquam ex rerum modi voluptate laboriosam repellendus eos omnis.</p>
                            <img src={Flower2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 }

 export default Story;