type TProps = {
  data: any;
  renderItem: any;
};

const Mapping = ({ data, renderItem }: TProps) => {
  if (!data || !Array.isArray(data)) return null;

  return <>{data.map((item, index) => renderItem(item, index))}</>;
};

export default Mapping;
