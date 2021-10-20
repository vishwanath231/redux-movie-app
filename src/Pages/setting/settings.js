export const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };