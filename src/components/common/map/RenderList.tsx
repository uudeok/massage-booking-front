import { Nullable } from "../../../@types/common";

type RenderListProps<T> = {
  data: Nullable<T[]>;
  renderItem: (item: T) => JSX.Element | void;
};

const RenderList = <T,>({ data, renderItem }: RenderListProps<T>) => {
  if (!data || !Array.isArray(data)) return null;

  return <>{data.map((item: T) => renderItem(item))}</>;
};

export default RenderList;
