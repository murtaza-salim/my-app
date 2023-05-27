import ImageCard, { ImageCardProps } from "./image-card/image-card";
import { useRenderParallelImagesStyles } from "./render-parallel-images.styles";

interface RenderParallelImagesProps {
  imagesList: ImageCardProps[];
  spacing?: number;
}

const RenderParallelImages = (props: RenderParallelImagesProps) => {
  const { imagesList, spacing = 20 } = props;

  const classes = useRenderParallelImagesStyles({ spacing });
  return (
    <div className={classes.root}>
      {imagesList.map((image) => (
        <ImageCard
          imageUrl={image?.imageUrl}
          title={image?.title}
          description={image.description}
          CtaText={image.CtaText}
          handleCtaClick={image.handleCtaClick}
        />
      ))}
    </div>
  );
};

export default RenderParallelImages;
