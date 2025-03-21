import React from "react";
import { useEffect } from "react";
import './Carousel.css';
import { ReactComponent as ChevronBack } from './../../assets/icons/chevron_backward.svg'
import { ReactComponent as ChevronForward } from './../../assets/icons/chevron_forward.svg'
import Slider from "react-slick";

function Carousel(props) {
    const project = props.project
    const slider = React.useRef(null);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'ArrowLeft') {
                slider?.current?.slickPrev()
            }
            if (event.key === 'ArrowRight') {
                slider?.current?.slickNext()
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    });

    const imagesContext = require.context(
        './../../assets/screens/',
        true,
        /\.png$/
    );

    const getProjectImages = (projectName) => {
        let images = {}

        const projectPath = `./${projectName}/carousel/`;

        const projectImages = imagesContext.keys().filter(key =>
            key.startsWith(projectPath)
        );

        for (let imagePath of projectImages) {
            let cleanImagePath = imagePath.replace(projectPath, '').replace('.png', '')

            if (cleanImagePath.includes('/')) {
                let imageType = cleanImagePath.split('/')[0]

                if (images[imageType] == undefined) {
                    images[imageType] = []
                }
                images[imageType].push(imagesContext(imagePath))
            }
        }
        return images
    };

    const images = getProjectImages(project.linkName);
    console.log(">>> ", images)
    var responsiveMobile = []
    var settings = {
        dots: true,
        speed: 300, // duration in ms
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
    };

    switch (project.device) {
        case 'mobile':
            responsiveMobile = [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ];

            settings.slidesToShow = 5;
            settings.responsive = responsiveMobile
            break;

        case 'desktop':
            responsiveMobile = [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ];

            settings.slidesToShow = 3;
            settings.responsive = responsiveMobile
            break;

        case 'hybrid':
            responsiveMobile = [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ];

            settings.slidesToShow = 3;
            settings.responsive = responsiveMobile
            // settings.variableWidth = true;
            settings.adaptativeHeight = true;
            break;
    }

    let carouselImages = []

    for (let type of Object.keys(images)) {
        console.log("type : ", type)
        switch (type) {
            case 'mobile':
                for (let image of images[type]) {
                    carouselImages.push(buildMobileMockup(image))
                }
                break;
            case 'small-desktop':
                for (let image of images[type]) {
                    carouselImages.push(buildSmallDesktopMockup(image))
                }
                break;
            case 'large-desktop':
                for (let image of images[type]) {
                    carouselImages.push(buildLargeDesktopMockup(image))
                }
                break;
        }
    }

    carouselImages.push(carouselImages.shift());

    return (
        <div className="container-carousel position-relative bg-surface">
            <Slider ref={slider} {...settings} className="h-100">
                {carouselImages.map((image, index) => (
                    <div key={index} className="position-relative">{image}</div>
                ))}
            </Slider>
            <div className="container-carousel-nav">
                <button className="carousel-btn" onClick={() => slider?.current?.slickPrev()}>
                    <ChevronBack className="icon-dark carousel-nav-icon" />
                </button>
                <button className="carousel-btn" onClick={() => slider?.current?.slickNext()}>
                    <ChevronForward className="icon-dark carousel-nav-icon" />
                </button>
            </div>
        </div>
    )

}

export default Carousel

function buildMobileMockup(imageUrl) {
    console.log("build mobile mockup of ", imageUrl)
    return (
        <svg
            className="mockup-svg"
            viewBox="0 0 280 607"
            xmlns="http://www.w3.org/2000/svg"
        >
            <foreignObject
                x="5.5"
                y="8"
                width="266"
                height="592"
                className="mockup-content br-4"
            >
                <div xmlns="http://www.w3.org/1999/xhtml" className="mockup-image-wrapper">
                    <img
                        src={imageUrl}
                    />
                </div>
            </foreignObject>
            <path fillRule="evenodd" clipRule="evenodd" d="M36.8491 1.08643C15.0442 1.08643 0 16.0309 0 36.3348L9.98456e-05 573.291C9.98456e-05 593.595 14.9159 605.51 36.7208 605.51L240.188 605.51C261.992 605.51 277.018 593.595 277.018 573.291L277.018 249.053H277.876C278.824 249.053 279.391 248.598 279.391 247.716V213.043C279.391 212.16 278.824 211.184 277.876 211.184H277.018V174.532H277.876C278.824 174.532 279.391 173.752 279.391 172.869V104.324C279.391 103.441 278.824 102.79 277.876 102.79H277.018V36.3349C277.018 16.0311 262.063 1.08643 240.259 1.08643H36.8491ZM36.8491 9.13024C19.7844 9.13024 8.58285 20.4448 8.58285 36.3348L8.58305 573.291C8.58305 589.181 19.6561 597.142 36.7208 597.142H240.188C257.252 597.142 268.435 589.181 268.435 573.291L268.435 36.3349C268.435 20.445 257.323 9.13024 240.259 9.13024L36.8491 9.13024Z" fill="#1E1E1F" />
            <path d="M146.088 21.3043C146.088 25.6745 142.545 29.2173 138.175 29.2173C133.805 29.2173 130.262 25.6745 130.262 21.3043C130.262 16.934 133.805 13.3912 138.175 13.3912C142.545 13.3912 146.088 16.934 146.088 21.3043Z" fill="#1E1E1F" />
        </svg>
    )
}

function buildSmallDesktopMockup(imageUrl) {
    console.log("build small desktop mockup of ", imageUrl)
    return (
        <svg
            className="mockup-svg"
            viewBox="0 0 450 339"
            xmlns="http://www.w3.org/2000/svg"
        >
            <foreignObject
                x="0"
                y="19"
                width="450"
                height="320"
                className="mockup-content"
            >
                <div xmlns="http://www.w3.org/1999/xhtml" className="mockup-image-wrapper">
                    <img
                        src={imageUrl}
                    />
                </div>
            </foreignObject>
            <rect width="449.66" height="10" fill="#2B373D" />
            <path d="M0 4C0 2.89543 0.895431 2 2 2H52C53.1046 2 54 2.89543 54 4V10H0V4Z" fill="#445760" />
            <path d="M52 9C52 7.89543 52.8954 7 54 7V7C55.1046 7 56 7.89543 56 9V10H52V9Z" fill="#445760" />
            <path d="M54 5H57.716V9H55.858C54.8319 9 54 8.16815 54 7.142V5Z" fill="#2B373D" />
            <rect width="449.66" height="10" transform="matrix(1 0 0 -1 0 19)" fill="#445760" />
            <mask id="mask0_1318_42" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="49" y="4" width="4" height="4">
                <rect x="49" y="4" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1318_42)">
                <path d="M50.0673 7.20888L49.834 6.97417L50.7673 6.03535L49.834 5.09652L50.0673 4.86182L51.0007 5.80064L51.934 4.86182L52.1673 5.09652L51.234 6.03535L52.1673 6.97417L51.934 7.20888L51.0007 6.27005L50.0673 7.20888Z" fill="white" />
            </g>
            <mask id="mask1_1318_42" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="55" y="4" width="4" height="4">
                <rect x="55" y="4" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask1_1318_42)">
                <path d="M56.834 6.20299H55.834V5.8677H56.834V4.86182H57.1673V5.8677H58.1673V6.20299H57.1673V7.20888H56.834V6.20299Z" fill="#959B9E" />
            </g>
            <mask id="mask2_1318_42" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="12" width="4" height="4">
                <rect x="3" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask2_1318_42)">
                <path d="M5.66667 15.7704L4 14.094L5.66667 12.4175L5.9625 12.7151L4.59167 14.094L5.9625 15.4728L5.66667 15.7704Z" fill="white" />
            </g>
            <mask id="mask3_1318_42" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="12" width="4" height="4">
                <rect x="14" y="16" width="4" height="4" transform="rotate(-180 14 16)" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask3_1318_42)">
                <path d="M11.3333 12.4176L13 14.094L11.3333 15.7705L11.0375 15.4729L12.4083 14.094L11.0375 12.7151L11.3333 12.4176Z" fill="#939EA3" />
            </g>
            <mask id="mask4_1318_42" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="17" y="12" width="4" height="4">
                <rect x="17" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask4_1318_42)">
                <path d="M18.9993 15.4353C18.6271 15.4353 18.3118 15.3054 18.0535 15.0455C17.7952 14.7857 17.666 14.4685 17.666 14.0941C17.666 13.7197 17.7952 13.4026 18.0535 13.1427C18.3118 12.8829 18.6271 12.7529 18.9993 12.7529C19.191 12.7529 19.3743 12.7927 19.5493 12.8724C19.7243 12.952 19.8743 13.0659 19.9993 13.214V12.7529H20.3327V13.9265H19.166V13.5912H19.866C19.7771 13.4347 19.6556 13.3118 19.5014 13.2223C19.3473 13.1329 19.1799 13.0882 18.9993 13.0882C18.7216 13.0882 18.4855 13.186 18.291 13.3816C18.0966 13.5772 17.9993 13.8147 17.9993 14.0941C17.9993 14.3735 18.0966 14.611 18.291 14.8066C18.4855 15.0022 18.7216 15.1 18.9993 15.1C19.2132 15.1 19.4063 15.0385 19.5785 14.9156C19.7507 14.7926 19.8716 14.6306 19.941 14.4294H20.291C20.2132 14.7256 20.0549 14.9673 19.816 15.1545C19.5771 15.3417 19.3049 15.4353 18.9993 15.4353Z" fill="white" />
            </g>
            <rect x="33" y="11" width="384" height="6" rx="1.5" fill="#38454C" />
            <mask id="mask5_1318_42" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="34" y="12" width="4" height="4">
                <rect x="34" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask5_1318_42)">
                <path d="M34.9993 15.7706C34.9077 15.7706 34.8292 15.7378 34.7639 15.6721C34.6987 15.6064 34.666 15.5275 34.666 15.4353V13.7588C34.666 13.6666 34.6987 13.5877 34.7639 13.522C34.8292 13.4564 34.9077 13.4235 34.9993 13.4235H35.166V13.0882C35.166 12.8563 35.2473 12.6586 35.4098 12.4952C35.5723 12.3317 35.7688 12.25 35.9993 12.25C36.2299 12.25 36.4264 12.3317 36.5889 12.4952C36.7514 12.6586 36.8327 12.8563 36.8327 13.0882V13.4235H36.9993C37.091 13.4235 37.1695 13.4564 37.2348 13.522C37.3 13.5877 37.3327 13.6666 37.3327 13.7588V15.4353C37.3327 15.5275 37.3 15.6064 37.2348 15.6721C37.1695 15.7378 37.091 15.7706 36.9993 15.7706H34.9993ZM34.9993 15.4353H36.9993V13.7588H34.9993V15.4353ZM35.9993 14.9324C36.091 14.9324 36.1695 14.8995 36.2348 14.8339C36.3 14.7682 36.3327 14.6893 36.3327 14.5971C36.3327 14.5049 36.3 14.4259 36.2348 14.3603C36.1695 14.2946 36.091 14.2618 35.9993 14.2618C35.9077 14.2618 35.8292 14.2946 35.7639 14.3603C35.6987 14.4259 35.666 14.5049 35.666 14.5971C35.666 14.6893 35.6987 14.7682 35.7639 14.8339C35.8292 14.8995 35.9077 14.9324 35.9993 14.9324ZM35.4993 13.4235H36.4993V13.0882C36.4993 12.9485 36.4507 12.8298 36.3535 12.732C36.2563 12.6342 36.1382 12.5853 35.9993 12.5853C35.8605 12.5853 35.7424 12.6342 35.6452 12.732C35.548 12.8298 35.4993 12.9485 35.4993 13.0882V13.4235Z" fill="white" />
            </g>
            <mask id="mask6_1318_42" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="443" y="12" width="4" height="4">
                <rect x="443" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask6_1318_42)">
                <path d="M445.001 15.4353C444.91 15.4353 444.831 15.4025 444.766 15.3368C444.701 15.2711 444.668 15.1922 444.668 15.1C444.668 15.0078 444.701 14.9288 444.766 14.8632C444.831 14.7975 444.91 14.7647 445.001 14.7647C445.093 14.7647 445.171 14.7975 445.237 14.8632C445.302 14.9288 445.335 15.0078 445.335 15.1C445.335 15.1922 445.302 15.2711 445.237 15.3368C445.171 15.4025 445.093 15.4353 445.001 15.4353ZM445.001 14.4294C444.91 14.4294 444.831 14.3966 444.766 14.3309C444.701 14.2652 444.668 14.1863 444.668 14.0941C444.668 14.0019 444.701 13.923 444.766 13.8573C444.831 13.7916 444.91 13.7588 445.001 13.7588C445.093 13.7588 445.171 13.7916 445.237 13.8573C445.302 13.923 445.335 14.0019 445.335 14.0941C445.335 14.1863 445.302 14.2652 445.237 14.3309C445.171 14.3966 445.093 14.4294 445.001 14.4294ZM445.001 13.4235C444.91 13.4235 444.831 13.3907 444.766 13.325C444.701 13.2594 444.668 13.1804 444.668 13.0882C444.668 12.996 444.701 12.9171 444.766 12.8514C444.831 12.7858 444.91 12.7529 445.001 12.7529C445.093 12.7529 445.171 12.7858 445.237 12.8514C445.302 12.9171 445.335 12.996 445.335 13.0882C445.335 13.1804 445.302 13.2594 445.237 13.325C445.171 13.3907 445.093 13.4235 445.001 13.4235Z" fill="white" />
            </g>
        </svg>
    )
}

function buildLargeDesktopMockup(imageUrl) {
    console.log("build large desktop mockup of ", imageUrl)
    return (
        <svg
            className="mockup-svg"
            viewBox="0 0 574 344"
            xmlns="http://www.w3.org/2000/svg"
        >
            <foreignObject
                x="0"
                y="17"
                width="574"
                height="325"
                className="mockup-content"
            >
                <div xmlns="http://www.w3.org/1999/xhtml" className="mockup-image-wrapper">
                    <img
                        src={imageUrl}
                    />
                </div>
            </foreignObject>
            <rect width="573.69" height="10" fill="#2B373D" />
            <path d="M0 4C0 2.89543 0.895431 2 2 2H50C51.1046 2 52 2.89543 52 4V10H0V4Z" fill="#445760" />
            <path d="M50 9C50 7.89543 50.8954 7 52 7V7C53.1046 7 54 7.89543 54 9V10H50V9Z" fill="#445760" />
            <path d="M52 5H55.716V9H53.858C52.8319 9 52 8.16815 52 7.142V5Z" fill="#2B373D" />
            <rect width="573.69" height="10" transform="matrix(1 0 0 -1 0 19)" fill="#445760" />
            <mask id="mask0_1318_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="47" y="4" width="4" height="4">
                <rect x="47" y="4" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1318_73)">
                <path d="M48.0673 7.20888L47.834 6.97417L48.7673 6.03535L47.834 5.09652L48.0673 4.86182L49.0007 5.80064L49.934 4.86182L50.1673 5.09652L49.234 6.03535L50.1673 6.97417L49.934 7.20888L49.0007 6.27005L48.0673 7.20888Z" fill="white" />
            </g>
            <mask id="mask1_1318_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="53" y="4" width="4" height="4">
                <rect x="53" y="4" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask1_1318_73)">
                <path d="M54.834 6.20299H53.834V5.8677H54.834V4.86182H55.1673V5.8677H56.1673V6.20299H55.1673V7.20888H54.834V6.20299Z" fill="#959B9E" />
            </g>
            <mask id="mask2_1318_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="12" width="4" height="4">
                <rect x="3" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask2_1318_73)">
                <path d="M5.70495 15.7704L4.02734 14.094L5.70495 12.4175L6.00273 12.7151L4.62289 14.094L6.00273 15.4728L5.70495 15.7704Z" fill="white" />
            </g>
            <mask id="mask3_1318_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="12" width="4" height="4">
                <rect x="14" y="16" width="4" height="4" transform="rotate(-180 14 16)" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask3_1318_73)">
                <path d="M11.4083 12.4176L13.0859 14.094L11.4083 15.7705L11.1106 15.4729L12.4904 14.094L11.1106 12.7151L11.4083 12.4176Z" fill="#939EA3" />
            </g>
            <mask id="mask4_1318_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="17" y="12" width="4" height="4">
                <rect x="17" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask4_1318_73)">
                <path d="M19.1253 15.4353C18.7506 15.4353 18.4333 15.3054 18.1732 15.0455C17.9132 14.7857 17.7832 14.4685 17.7832 14.0941C17.7832 13.7197 17.9132 13.4026 18.1732 13.1427C18.4333 12.8829 18.7506 12.7529 19.1253 12.7529C19.3182 12.7529 19.5028 12.7927 19.6789 12.8724C19.855 12.952 20.006 13.0659 20.1319 13.214V12.7529H20.4674V13.9265H19.293V13.5912H19.9976C19.9082 13.4347 19.7858 13.3118 19.6307 13.2223C19.4755 13.1329 19.307 13.0882 19.1253 13.0882C18.8457 13.0882 18.608 13.186 18.4123 13.3816C18.2166 13.5772 18.1187 13.8147 18.1187 14.0941C18.1187 14.3735 18.2166 14.611 18.4123 14.8066C18.608 15.0022 18.8457 15.1 19.1253 15.1C19.3406 15.1 19.5349 15.0385 19.7083 14.9156C19.8816 14.7926 20.0032 14.6306 20.0731 14.4294H20.4254C20.3471 14.7256 20.1878 14.9673 19.9473 15.1545C19.7069 15.3417 19.4329 15.4353 19.1253 15.4353Z" fill="white" />
            </g>
            <rect x="32" y="11" width="367" height="6" rx="1.5" fill="#38454C" />
            <mask id="mask5_1318_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="33" y="12" width="4" height="4">
                <rect x="33" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask5_1318_73)">
                <path d="M33.9993 15.7706C33.9077 15.7706 33.8292 15.7378 33.7639 15.6721C33.6987 15.6064 33.666 15.5275 33.666 15.4353V13.7588C33.666 13.6666 33.6987 13.5877 33.7639 13.522C33.8292 13.4564 33.9077 13.4235 33.9993 13.4235H34.166V13.0882C34.166 12.8563 34.2473 12.6586 34.4098 12.4952C34.5723 12.3317 34.7688 12.25 34.9993 12.25C35.2299 12.25 35.4264 12.3317 35.5889 12.4952C35.7514 12.6586 35.8327 12.8563 35.8327 13.0882V13.4235H35.9993C36.091 13.4235 36.1695 13.4564 36.2348 13.522C36.3 13.5877 36.3327 13.6666 36.3327 13.7588V15.4353C36.3327 15.5275 36.3 15.6064 36.2348 15.6721C36.1695 15.7378 36.091 15.7706 35.9993 15.7706H33.9993ZM33.9993 15.4353H35.9993V13.7588H33.9993V15.4353ZM34.9993 14.9324C35.091 14.9324 35.1695 14.8995 35.2348 14.8339C35.3 14.7682 35.3327 14.6893 35.3327 14.5971C35.3327 14.5049 35.3 14.4259 35.2348 14.3603C35.1695 14.2946 35.091 14.2618 34.9993 14.2618C34.9077 14.2618 34.8292 14.2946 34.7639 14.3603C34.6987 14.4259 34.666 14.5049 34.666 14.5971C34.666 14.6893 34.6987 14.7682 34.7639 14.8339C34.8292 14.8995 34.9077 14.9324 34.9993 14.9324ZM34.4993 13.4235H35.4993V13.0882C35.4993 12.9485 35.4507 12.8298 35.3535 12.732C35.2563 12.6342 35.1382 12.5853 34.9993 12.5853C34.8605 12.5853 34.7424 12.6342 34.6452 12.732C34.548 12.8298 34.4993 12.9485 34.4993 13.0882V13.4235Z" fill="white" />
            </g>
            <mask id="mask6_1318_73" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="567" y="12" width="4" height="4">
                <rect x="567" y="12" width="4" height="4" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask6_1318_73)">
                <path d="M569.001 15.4353C568.91 15.4353 568.831 15.4025 568.766 15.3368C568.701 15.2711 568.668 15.1922 568.668 15.1C568.668 15.0078 568.701 14.9288 568.766 14.8632C568.831 14.7975 568.91 14.7647 569.001 14.7647C569.093 14.7647 569.171 14.7975 569.237 14.8632C569.302 14.9288 569.335 15.0078 569.335 15.1C569.335 15.1922 569.302 15.2711 569.237 15.3368C569.171 15.4025 569.093 15.4353 569.001 15.4353ZM569.001 14.4294C568.91 14.4294 568.831 14.3966 568.766 14.3309C568.701 14.2652 568.668 14.1863 568.668 14.0941C568.668 14.0019 568.701 13.923 568.766 13.8573C568.831 13.7916 568.91 13.7588 569.001 13.7588C569.093 13.7588 569.171 13.7916 569.237 13.8573C569.302 13.923 569.335 14.0019 569.335 14.0941C569.335 14.1863 569.302 14.2652 569.237 14.3309C569.171 14.3966 569.093 14.4294 569.001 14.4294ZM569.001 13.4235C568.91 13.4235 568.831 13.3907 568.766 13.325C568.701 13.2594 568.668 13.1804 568.668 13.0882C568.668 12.996 568.701 12.9171 568.766 12.8514C568.831 12.7858 568.91 12.7529 569.001 12.7529C569.093 12.7529 569.171 12.7858 569.237 12.8514C569.302 12.9171 569.335 12.996 569.335 13.0882C569.335 13.1804 569.302 13.2594 569.237 13.325C569.171 13.3907 569.093 13.4235 569.001 13.4235Z" fill="white" />
            </g>
        </svg>
    )
}