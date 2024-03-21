import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

type FormValue = {
	title: string;
	email: string;
	content: string;
};

const ContactUsForm: FC = () => {
	const form = useRef<HTMLFormElement>(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValue>();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) {
			console.log('error');
			return;
		} else {
			emailjs
				.sendForm('service_0vpblui', 'template_jbwr0qy', form.current, {
					publicKey: 'tuwilzPgDWn_9AcUJ',
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
            <LabelBoxStyle>
            <LabelStyle>제목</LabelStyle>
			<input {...register('title')} />
            </LabelBoxStyle>
            <LabelBoxStyle>
            <LabelStyle>이메일</LabelStyle>
			<input {...register('email')} />
            </LabelBoxStyle>
			<label>내용</label>
			<input {...register('content')} />
		</Self>
	);
};

export default ContactUsForm;

const Self = styled.form`
	border: 1px solid black;
	/* height: 100%; */
    display: flex;
    flex-direction: column;
`;


const LabelBoxStyle = styled.div`
    border : 1px solid black;
  
`

const LabelStyle = styled.label`

    border :1px solid red;
`