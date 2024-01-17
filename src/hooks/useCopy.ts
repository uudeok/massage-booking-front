import { useState } from "react";

type onCopyFn = (text: string) => Promise<boolean>;

const useCopyClipboard = (): [boolean, onCopyFn] => {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onCopy: onCopyFn = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);

      return true;
    } catch (error) {
      console.log(error);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
};

export default useCopyClipboard;

/// 마사지 정보 그대로 다시 예약하기 할때
/// 마이페이지 예약 상세에서 예약 완료건에 대해서 마사지 그대로 다시 예약하기 기능
/// 마사지 아이템, 마사지 시간(60,90,120분) 그대로 복사해서 시간,날짜만 고르는 단계로
