import { Carousel, Image } from "antd";

const imgList = [
  {
    src: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_960_720.jpg",
  },
];

const CarouselItems = imgList.map((item, i) => (
  <div key={i}>
    <Image width="100%" height="550px" preview={false} src={item.src} />
  </div>
));

const MyCarousel = () => {
  return <Carousel autoplay>{CarouselItems}</Carousel>;
};

export default MyCarousel;
