import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

interface IProps {
  isChecked: boolean;
  changeCheckedHandler: () => void;
  showLoginHandler: () => void;
  error: string;
}

const BookingConfirm = ({
  isChecked,
  changeCheckedHandler,
  showLoginHandler,
  error,
}: IProps) => {
  return (
    <ConfirmBoxStyle>
      <CheckBoxStyle>
        <CheckStyle>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={changeCheckedHandler}
          />
          <p>위 내용을 모두 확인 하였습니다.</p>
        </CheckStyle>
        {error && <WarningStyle>{error}</WarningStyle>}
      </CheckBoxStyle>
      <ButtonBoxStyle>
        <NonMemberButtonStyle>비회원으로 진행</NonMemberButtonStyle>
        <MemberButtonStyle onClick={showLoginHandler}>
          회원으로 진행
        </MemberButtonStyle>
      </ButtonBoxStyle>
    </ConfirmBoxStyle>
  );
};

export default BookingConfirm;

const ConfirmBoxStyle = styled.div`
  text-align: right;
  padding: 0.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    text-align: center;
  }
`;

const CheckBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckStyle = styled.div`
  display: flex;
  justify-content: right;
  font-size: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    justify-content: center;
  }
`;

const WarningStyle = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: red;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    justify-content: center;
  }
`;

const ButtonBoxStyle = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: flex;
    flex-direction: row;
  }
`;

const NonMemberButtonStyle = styled.button`
  background-color: whitesmoke;
  height: 3.5rem;
  padding: 1rem;

  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: black;

  &:hover {
    border: 2px solid #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
    padding: 0.5rem;

    &:hover {
      border: 1px solid #76916a;
    }
  }
`;

const MemberButtonStyle = styled.button`
  background-color: #76916a;
  height: 3.5rem;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    border: 2px solid white;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
    padding: 0.5rem;

    &:hover {
      border: 1px solid white;
    }
  }
`;
