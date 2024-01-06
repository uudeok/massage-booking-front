import LoadingBar from "./LoadingBar";

type TProps = {
  isLoading: boolean;
};

const FetchWithLoading = ({ isLoading }: TProps) => {
  return <> {isLoading && <LoadingBar />}</>;
};

export default FetchWithLoading;
