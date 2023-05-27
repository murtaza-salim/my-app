import { CustomButton } from "../../custom-button";
import { useImageCardStyles } from "./image-card,styles";

export interface ImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  CtaText: string;
  handleCtaClick: () => void;
  padding?: number;
  imageHeight?: number;
}
const ImageCard = (props: ImageCardProps) => {
  const {
    imageUrl,
    title,
    description,
    CtaText,
    handleCtaClick,
    padding = 10,
    imageHeight = 400,
  } = props;
  const classes = useImageCardStyles({ padding, imageHeight });
  return (
    <div className={classes.root}>
      <img className={classes.image} alt={`${title}-img`} src={imageUrl} />

      <h1>{title}</h1>

      <p>{description}</p>

      <CustomButton
        text={CtaText}
        onClick={handleCtaClick}
        variant={"danger"}
      />
    </div>
  );
};

export default ImageCard;
