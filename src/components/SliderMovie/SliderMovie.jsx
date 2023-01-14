import Carousel from "react-bootstrap/Carousel";

function SliderMovie() {
  return (
    <header >
      <Carousel fade className="mb-5 " >
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"600px"}
            src="https://i.blogs.es/7b5613/la-casa-de-papel-temporada-5/1366_2000.jpeg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"600px"}
            src="https://cdn.milenio.com/uploads/media/2019/01/21/club-de-cuervos-especial.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"600px"}
            src="https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRhLk_2ZIHFDwnFeV9FJ7mXe9svx3faEDXcmBPB5N3CmL9aBvxw_SgMHSHTxkjHhJIeXdueDD2-exmkHwMZUne5x7T8kiu1QknM66ecL666ChDePTu4PXXIzRYG66a_FvyRQBQ.jpg?r=c3a"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export { SliderMovie };
