import { BlinkBlur } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <BlinkBlur color="#1a2035" size="large" text="Please Wait" />
    </div>
  );
};

export default Loading;
