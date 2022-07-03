import GalleryImg1 from "../../assets/galeria-1.png";
import GalleryImg2 from "../../assets/galeria-2.png";
import GalleryImg3 from "../../assets/galeria-3.png";
import GalleryImg4 from "../../assets/galeria-4.png";
import GalleryImg5 from "../../assets/galeria-5.png";
import GalleryImg6 from "../../assets/galeria-6.png";
import GalleryImg7 from "../../assets/galeria-7.png";
import GalleryImg8 from "../../assets/galeria-8.png";

import { GalleryImage } from "../GalleryImage";

import { GalleryContainer, Row } from "./styles";

export function Gallery() {
  return (
    <GalleryContainer>
      <Row>
        <GalleryImage src={GalleryImg1} />
        <GalleryImage src={GalleryImg2} />
        <GalleryImage src={GalleryImg3} />
        <GalleryImage src={GalleryImg4} />
      </Row>

      <Row>
        <GalleryImage src={GalleryImg5} />
        <GalleryImage src={GalleryImg6} />
        <GalleryImage src={GalleryImg7} />
        <GalleryImage src={GalleryImg8} />
      </Row>
    </GalleryContainer>
  );
}
