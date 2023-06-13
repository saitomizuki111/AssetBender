
import './index.css'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import next from '../../../assets/imgs/next.png'
import prev from '../../../assets/imgs/prev.png'
import { nft_files } from "../../../constant/ui/homepage/nfts";

const Wrapper = styled.div`
  max-width:1520px;
  width:100%;
  margin:0 auto;
  @media(max-width:600px){
    text-align:center;
  }
  .slick-prev {
    left: -38px;
  }
  .slick-next {
    right: -38px;
  }
`
const Arrow = styled.img`
  width:50px;
  height:50px;
  z-index:3;
`
const Image = styled.img`
  // filter:grayscale(100%);
  margin:0 auto;
  width: 250px;
  
  @media(max-width:1492px){
    width:350px !important;
  }
  @media(max-width:520px){
    width:250px !important;
  }
  @media(max-width:405px){
    width:200px !important;
  }
`
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    // {
    //   breakpoint: 1460,
    //   settings: {
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     infinite: true,
    //     '.slick-track': {
    //       width: '1500px !important'
    //     }
    //   }
    // },
    {
      breakpoint: 1492,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3
      }
    },
    // {
    //   breakpoint: 986,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 1
    //   }
    // },
    // {
    //   breakpoint: 1150,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     initialSlide: 3
    //   }
    // },
    // {
    //   breakpoint: 860,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     initialSlide: 2
    //   }
    // },
    {
      breakpoint: 1242,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
  ],
  nextArrow: <Arrow src={next} alt="nextArrow" />,
  prevArrow: <Arrow src={prev} alt="prevArrow" />,
};

const Slicker = () => {
  return (
    <Wrapper>
      <Slider {...settings}>
        {
          nft_files.map((nft: any, index: any) => {
            return (
              <div key={index}>
                <Image src={nft} alt="nft" />
              </div>
            )
          })
        }
      </Slider>
    </Wrapper >
  )
}

export default Slicker;