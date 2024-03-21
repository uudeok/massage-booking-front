import React, { FC, useRef } from "react";
import {useForm} from "react-hook-form"
import emailjs from "@emailjs/browser";


type FormValue = {
  title : string;
  email :string;
  content : string;
}


const ContactUsForm : FC = () => {
  const form = useRef<HTMLFormElement>(null);

const {register, handleSubmit , watch, formState : { errors }} = useForm<FormValue>()

const onSubmit = (data : any)  => {
  console.log(data)
}

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.log("error");
      return;
    } else {
      emailjs
        .sendForm("service_0vpblui", "template_jbwr0qy", form.current, {
          publicKey: "tuwilzPgDWn_9AcUJ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>제목</label>
<input {...register("title")} />
<label>이메일</label>
<input {...register("email")} />
<label>내용</label>
<input {...register("content")} />
  </form>
  
  )
}

export default ContactUsForm;
