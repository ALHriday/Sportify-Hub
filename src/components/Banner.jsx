import { useState } from "react";

const Banner = () => {
    const [slider, setSlider] = useState(0);
    const images = [
        "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1745160406~exp=1745164006~hmac=564ebb662c7d508678c6b1446ff3dfe7a4ec5c235947805d6b3c09c5f40eee1c&w=996",
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://img.freepik.com/free-photo/top-view-football-composition_23-2147827671.jpg?t=st=1745160753~exp=1745164353~hmac=cd0e58fd2d0bf6861e1c1a0263d4c7b6047021adc8b6069da459036e3dcd3e62&w=996",
        "https://img.freepik.com/free-photo/modern-sport-composition-with-gym-elements_23-2148000157.jpg?t=st=1745160855~exp=1745164455~hmac=6621963f78e5b01c94bfcd73c3b271beb06ef9282cd632b2f8e9c9abc33ae21c&w=996"

    ];

    const handleSliderNext = () => {
        if (slider < 3) {
            setSlider(slider + 1);
        } else {
            setSlider(0);
        }
    }

    const handleSliderPrev = () => {
        if (slider > 0 && slider <= 3) {
            setSlider(slider - 1);
        } else {
            setSlider(3);
        }
    }

    return (
        <div className="carousel w-full max-h-96 lg:max-h-fit">
            <div className="carousel-item relative w-full">
                <img
                    src={images[slider]}
                    className="w-full object-cover h-[240px] md:h-[320px] lg:h-[420px]" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a onClick={handleSliderPrev} className="btn btn-circle">❮</a>
                    <a onClick={handleSliderNext} className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>

    );
};

export default Banner;