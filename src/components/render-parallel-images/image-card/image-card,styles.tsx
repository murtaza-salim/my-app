import { makeStyles } from "@mui/styles";

interface PropsType {
  padding?: number;
  imageHeight?: number;
}
export const useImageCardStyles = makeStyles(() => {
  return {
    root: {
      padding: (props?: PropsType) => `${props?.padding}px`,
      width: (props?: PropsType) =>
        `calc( 100% - ${props?.padding ? props?.padding * 2 : 0}px )`,
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: (props?: PropsType) => `${props?.imageHeight}px`,
    },
  };
});
