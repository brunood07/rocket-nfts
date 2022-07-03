import { Container } from "./styles";

interface GalleryImageProps {
  src: string;
  alt?: string;
}

export function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
}
