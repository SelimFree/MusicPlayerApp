import { v4 as uuidv4 } from "uuid";

//Song covers
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";

//Song audio
import audio1 from "./audio/1.mp3";
import audio2 from "./audio/2.mp3";
import audio3 from "./audio/3.mp3";
import audio4 from "./audio/4.mp3";
import audio5 from "./audio/5.mp3";
import audio6 from "./audio/6.mp3";
import audio7 from "./audio/7.mp3";
import audio8 from "./audio/8.mp3";
import audio9 from "./audio/9.mp3";
import audio10 from "./audio/10.mp3";

//
function GetMusic() {
    return [
        {
            name: "Bones",
            artist: "Imagine Dragons",
            audio: audio1,
            cover: img1,
            id: uuidv4(),
            active: true,
            color: ["#a02527", "#882a2c"],
        },

        {
            name: "Moving On",
            artist: "Marshmello",
            audio: audio2,
            cover: img2,
            id: uuidv4(),
            active: false,
            color: ["#9a66cb", "#ad759a"],
        },

        {
            name: "Throne",
            artist: "Bring Me the Horizon",
            audio: audio3,
            cover: img3,
            id: uuidv4(),
            active: false,
            color: ["#000000", "#3f3f3f"],
        },
    ];
}

export default GetMusic;
