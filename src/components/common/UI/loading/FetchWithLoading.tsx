import LoadingBar from "./LoadingBar";

type TProps = {
  isLoading: boolean;
  children: JSX.Element;
};

const FetchWithLoading = ({ isLoading, children }: TProps) => {
  return <>{isLoading ? <LoadingBar /> : children}</>;
};

export default FetchWithLoading;
