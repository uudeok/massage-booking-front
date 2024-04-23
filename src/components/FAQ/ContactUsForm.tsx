import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import ErrorDisplay from '../common/error/ErrorDisplay';
import LoadingBar from '../common/UI/loading/LoadingBar';
import Button from '../common/UI/button/Button';

type FormValue = {
	title: string;
	email: string;
	content: string;
};

type TProps = {
	closeEmailModal: () => void;
	setResult: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const service_id = `${process.env.REACT_APP_SERVICE_ID}`;
const template_id = `${process.env.REACT_APP_TEMPLATE_ID}`;
const public_key = `${process.env.REACT_APP_PUBLIC_KEY}`;

const ContactUsForm = ({ closeEmailModal, setResult }: TProps) => {
	const form = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValue>();

	const onSubmit = async () => {
		if (!form.current) {
			console.log('form error');
			return;
		}
		try {
			if (!isSubmitting) {
				setIsSubmitting(true); // 클릭되면 버튼을 비활성화
				await emailjs.sendForm(service_id, template_id, form.current, {
					publicKey: public_key,
				});

				setResult(true); // 비동기 결과 전달

				setTimeout(() => {
					setIsSubmitting(false); // 지정된 시간 후에 버튼을 다시 활성화
				}, 2000);
			}
		} catch (error) {
			console.log('error', error);
			setResult(false);
		} finally {
			setIsSubmitting(false);
			closeEmailModal();
		}
	};

	return (
		<Self onSubmit={handleSubmit(onSubmit)} ref={form}>
			<Wrapper>
				<InputWrapper>
					<LabelStyle>제목</LabelStyle>
					<InputStyle
						{...register('title', { required: true, maxLength: 20 })}
						placeholder="제목을 입력하세요"
					/>
				</InputWrapper>
				{errors.title && <ErrorDisplay errorMessage="제목을 입력해주세요" fontSize="12px" $padding="0px" />}
			</Wrapper>

			<Wrapper>
				<InputWrapper>
					<LabelStyle>이메일</LabelStyle>
					<InputStyle
						{...register('email', {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
						type="email"
						placeholder="이메일 주소를 입력해주세요"
					/>
				</InputWrapper>
				{errors.email && (
					<ErrorDisplay errorMessage="올바른 이메일 주소를 입력해주세요" fontSize="12px" $padding="0px" />
				)}
			</Wrapper>
			<ContentLabelStyle>
				<LabelStyle>문의 내용</LabelStyle>
				{errors.content && (
					<ErrorDisplay errorMessage="3글자 이상 작성해주세요" fontSize="12px" $padding="0px" />
				)}
			</ContentLabelStyle>
			<ContentStyle
				{...register('content', { required: true, minLength: 3 })}
				placeholder="문의하실 내용을 작성해주세요"
			/>
			<ButtonWrapper>
				<Button onClick={() => closeEmailModal()} size="lg" role="cancel">
					취소하기
				</Button>
				<Button type="submit" size="lg" role="round">
					{isSubmitting ? <LoadingBar /> : '보내기'}
				</Button>
			</ButtonWrapper>
		</Self>
	);
};

export default ContactUsForm;

const Self = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 4rem;
	justify-content: center;
`;

const InputWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
`;

const LabelStyle = styled.label`
	width: 5rem;
`;
const InputStyle = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 10px;
	font-size: 15px;
	outline-style: none;
	background-color: whitesmoke;
	border: none;
`;

const ContentStyle = styled.textarea`
	background-color: whitesmoke;
	border: none;
	border-radius: 10px;
	width: 100%;
	height: 11rem;
	resize: none;
	outline-style: none;
	padding: 0.5rem;
	font-size: 15px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	margin-top: 0.5rem;
`;

const ContentLabelStyle = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	gap: 1rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`;
