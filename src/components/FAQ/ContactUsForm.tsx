import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import theme from '../../styles/theme';
import ErrorDisplay from '../common/error/ErrorDisplay';
import { useModal } from '../../hooks/useModal';

type FormValue = {
	title: string;
	email: string;
	content: string;
};

const service_id = `${process.env.REACT_APP_SERVICE_ID}`;
const template_id = `${process.env.REACT_APP_TEMPLATE_ID}`;
const public_key = `${process.env.REACT_APP_PUBLIC_KEY}`;

const ContactUsForm: FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const { isOpen, showModal, closeModal } = useModal();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValue>();

	const onSubmit = (data: FormValue) => {
		if (!form.current) {
			console.log('form error');
			return;
		} else {
			emailjs
				.sendForm(service_id, template_id, form.current, {
					publicKey: public_key,
				})
				.then(
					() => {
						console.log('SUCCESS!');
					},
					(error) => {
						console.log('FAILED...', error.text);
					},
				);
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
						{...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
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
			<ButtonStyle type="submit" value="제출하기" />
		</Self>
	);
};

export default ContactUsForm;

const Self = styled.form`
	display: flex;
	flex-direction: column;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	align-items: center;
	height: 4rem;
	justify-content: center;
`;

const InputWrapper = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 0.5rem;
`;

const LabelStyle = styled.label`
	width: 5rem;
`;
const InputStyle = styled.input`
	width: 100%;
	padding: 0.5rem;
	border-radius: 10px;
	outline-style: none;
	background-color: whitesmoke;
	border: none;
`;

const ContentStyle = styled.textarea`
	background-color: whitesmoke;
	border: none;
	border-radius: 10px;
	width: 100%;
	height: 10rem;
	resize: none;
	outline-style: none;
`;

const ButtonStyle = styled.input`
	padding: 0.5rem;
	background-color: ${theme.palette.greenDk};
	color: white;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	margin-top: 1rem;
`;

const ContentLabelStyle = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	gap: 1rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`;
