import ErrorDisplay from "../../error/ErrorDisplay";

type TProps<T> = {
  data: T[];
  renderItem: (item: T) => JSX.Element | void;
};

const RenderList = <T,>({ data, renderItem }: TProps<T>) => {
  if (!data || !Array.isArray(data))
    return <ErrorDisplay errorMessage="데이터가 없습니다😅" />;

  return <>{data.map((item: T) => renderItem(item))}</>;
};

export default RenderList;
