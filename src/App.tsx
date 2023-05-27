import { ThemeProvider } from "@mui/material/styles";
import { AppTheme } from "./theme/theme";
import ImageCard from "./components/render-parallel-images/image-card/image-card";
import RenderParallelImages from "./components/render-parallel-images/render-parallel-images";

function App() {
  const imagesList = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Guitar",
      description:
        "Best guitar that has been used by one of the Greatest musicians",
      CtaText: "Shop Now",
      handleCtaClick: () => {},
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1561777848-6a56e08d6a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=556&q=80",
      title: "Guitar",
      description:
        "Best guitar that has been used by one of the Greatest musicians",
      CtaText: "Shop Now",
      handleCtaClick: () => {},
    },
  ];
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <RenderParallelImages imagesList={imagesList} />

        <ImageCard
          imageUrl={
            "https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
          title="Guitar"
          description="Best guitar that has been used by one of the Greatest musicians"
          CtaText="Shop Now"
          handleCtaClick={() => {}}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
