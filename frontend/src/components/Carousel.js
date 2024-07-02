import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="m-0 p-0">
        <ul>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const slides = [
    {
      title: "GCEM Foundation 2016-ൽ ആരംഭിച്ച പതിലതി-സോഷൽ ഫോറസ്ട്രിയുടെ സമാഹരത്തോടെ",
      content: "വരിസംിതി ദിനത്തിലും തുടർന്നും നടക്കുന്ന തൈകൾ സമാഹരിക്കുകയോ, നാട്ടിൽ ഒരു ഹരിത ശുചിത്വ ബോധം ഉണ്ടാക്കുകയോ ചെയ്യുക എന്ന ലക്ഷ്യം വെച്ച് 2016 ജൂൺ 5 ന് പ്രൊഫസർ ഷാരീ അന്റണീ നെത്രത്വത്തിൽ സോഷൽ ഫോറസ്ട്രിയുടെ തുടക്കം കുറിച്ചു. GCEM Foundation ആരംഭിച്ച പളതിയായതിനാൽ, സോഷൽ ഫോറസ്ട്രി നടത്തുന്ന തൈകൾ നടപ്പിലാക്കിൽ സംസ്ഥാനങ്ങൾ നൽകുന്ന പലതിയുടെ നോട്ടീസ്, വിദ്യാലയങ്ങളകും സമ്പാദനങ്ങൾക്കും സോഷ്യൽ ഫോറസ്ട്രി കൈകൾക്കൊണ്ടെടാപ്പം വിതരണം ചെയ്ത്.",
      link: "https://www.example.com"
    },
    {
      title: "കൂടുംബശ്രീ കോഴിക്കോട് മിഷൻ സഹകരണോം",
      content: "തൂടർക്ക് കുടുംബശ്രീ കോഴിക്കോട് മിഷൻ ഈ പലതിയുടെ നടത്തിലക്കാണ് കൈപ്പറ്റുകകുമാവും കൂടുംബശ്രീ കൂട്ടയേകുനതിന്.",
      link: "https://www.example.com"
    }
    // Add more slides as needed
  ];

  return (
    <div className="relative max-w-4xl mx-auto bg-[#D9E4C1]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="p-0 10px w-full bg-[#D9E4C1] rounded-lg m-2.5" key={index}>
            <div className="p-5 text-left">
              <h3 className="text-lg text-gray-800">{slide.title}</h3>
              <p className="text-base text-gray-600 mt-2.5">{slide.content}</p>
              <a 
                href={slide.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block py-2 px-3 rounded-full bg-[#D9E4C1] text-black hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
