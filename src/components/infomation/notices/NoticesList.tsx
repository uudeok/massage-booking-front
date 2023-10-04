import NoticeItem from "./NoticeItem";
import { NOTICE_LIST } from "../../../const/notices";

const NoticesList = () => {
  return (
    <ul>
      {NOTICE_LIST.map((item) => (
        <NoticeItem item={item} key={item.date} />
      ))}
    </ul>
  );
};

export default NoticesList;
