import { generate_notice } from "..";
import { NOTICE_CATEGORY_KEYS, TNotice } from "../../@types/notice";
import axios from "axios";

export const fetchNoticeList = async (category: NOTICE_CATEGORY_KEYS) => {
  if (category === "ALL") {
    const response = await axios.get<TNotice[]>(generate_notice);
    return response.data;
  } else {
    const response = await axios.get<TNotice[]>(
      `${generate_notice}/?category=${category}`
    );
    return response.data;
  }
};
