type TProps<T> = {
  data: T[];
  renderItem: (item: T) => JSX.Element;
};

const Mapping = <T extends {}>({ data, renderItem }: TProps<T>) => {
  if (!data || !Array.isArray(data)) return null;

  return <>{data.map((item: T) => renderItem(item))}</>;
};

export default Mapping;
