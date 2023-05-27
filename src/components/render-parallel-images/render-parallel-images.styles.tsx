import { makeStyles } from "@mui/styles";

interface PropsType {
  spacing?: number;
}
export const useRenderParallelImagesStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      columnGap: (props?: PropsType) => `${props?.spacing}px`,
    },
  };
});
