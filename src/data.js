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
            color: ["#a02527", "#882a2c"],
        },

        {
            name: "Moving On",
            artist: "Marshmello",
            audio: audio2,
            cover: img2,
            id: uuidv4(),
            color: ["#9a66cb", "#ad759a"],
        },

        {
            name: "Throne",
            artist: "Bring Me the Horizon",
            audio: audio3,
            cover: img3,
            id: uuidv4(),
            color: ["#000000", "#3f3f3f"],
        },

        {
            name: "Kingslayer",
            artist: "Bring Me the Horizon feat. BABYMETAL",
            audio: audio4,
            cover: img4,
            id: uuidv4(),
            color: ["#B15739", "#465444"],
        },

        {
            name: "Levels",
            artist: "Avicii",
            audio: audio5,
            cover: img5,
            id: uuidv4(),
            color: ["#E1C058", "#B6AA7E"],
        },

        {
            name: "24K Magic",
            artist: "Bruno Mars",
            audio: audio6,
            cover: img6,
            id: uuidv4(),
            color: ["#8B171A", "#E9E2B5"],
        },

        {
            name: "The Real Slim Shady",
            artist: "Eminem",
            audio: audio7,
            cover: img7,
            id: uuidv4(),
            color: ["#737270", "#FEFEFE"],
        },

        {
            name: "Old Town Road",
            artist: "Lil Nax X",
            audio: audio8,
            cover: img8,
            id: uuidv4(),
            color: ["#163343", "#7D95A1"],
        },

        {
            name: "Industry Baby X Beat it (Lukka Mushup)",
            artist: "Lukka",
            audio: audio9,
            cover: img9,
            id: uuidv4(),
            color: ["#FA9DAB", "#DD4E8D"],
        },

        {
            name: "Timbaland X Give It To Me feat. Nelly Furtado",
            artist: "Nelly Furtado, Justin Timberlake",
            audio: audio10,
            cover: img10,
            id: uuidv4(),
            color: ["#1B211B", "#E05B22"],
        },
    ];
}

export default GetMusic;
