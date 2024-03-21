import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import theme from '../../styles/theme';
import CommonButton from '../common/button/CommonButton';
import ErrorDisplay from '../common/error/ErrorDisplay';

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

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValue>();

	const onSubmit = (data: FormValue) => {
		console.log(data);
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) {
			console.log('error');
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
		<Self onSubmit={handleSubmit(onSubmit)}>
			<Wrapper>
				<LabelBoxStyle>
					<LabelStyle>제목</LabelStyle>
					<InputStyle {...register('title', { required: true, maxLength: 20 })} />
				</LabelBoxStyle>
				{errors.title && <ErrorDisplay errorMessage="제목을 입력해주세요" $padding="0rem" fontSize="14px" />}
			</Wrapper>
			<Wrapper>
				<LabelBoxStyle>
					<LabelStyle>이메일</LabelStyle>
					<InputStyle {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" />
				</LabelBoxStyle>
				{errors.email && (
					<ErrorDisplay errorMessage="올바른 이메일을 입력해주세요" $padding="0rem" fontSize="14px" />
				)}
			</Wrapper>

			<LabelStyle>문의 내용</LabelStyle>
			<FooterStyle>
				<ContentBoxStyle {...register('content', { required: true })} />
				{errors.content && (
					<ErrorDisplay errorMessage="3글자 이상 입력해주세요" $padding="0rem" fontSize="14px" />
				)}
			</FooterStyle>
			<div>
				<ButtonStyle type="submit">제출하기</ButtonStyle>
			</div>
		</Self>
	);
};

export default ContactUsForm;

const Wrapper = styled.div`
	height: 3.5rem;
	text-align: center;
`;

const FooterStyle = styled.div`
	height : 10rem;
	text-align: center;
`;

const Self = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const LabelBoxStyle = styled.div`
	display: flex;
`;

const LabelStyle = styled.label`
	width: 5rem;
	text-align: center;
	color: ${theme.palette.greenDk};
	`;

const InputStyle = styled.input`
	border-radius: 10px;
	flex: 1;
	padding: 0.5rem;
	outline-style: none;
	background-color: whitesmoke;
	border: none;
`;

const ContentBoxStyle = styled.textarea`
	background-color: whitesmoke;
	border: none;
	border-radius: 10px;
	width: 100%;
	height: 8rem;
	resize: none;
	outline-style: none;
	margin-top : 1rem;
`;

const ButtonStyle = styled.button`
	width: 5rem;
	padding: 0.3rem;
	background-color: ${theme.palette.greenDk};
	color: white;
	border: none;
	border-radius: 10px;
	float: right;
`;
