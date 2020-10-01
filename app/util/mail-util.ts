import nodemailer from 'nodemailer';
import { config } from '../config';

interface IMensagemEmail {
  para:string,
  titulo:string,
  mensagem:string,
  anexos?:[]
}

const transporter = nodemailer.createTransport(<any> config.mail);

const enviarEmail = async (mensagemEmail:IMensagemEmail) => {
  const {para, titulo, mensagem, anexos} = mensagemEmail;
  return await transporter.sendMail({
    from:config.mail.from,
    to:para,
    subject:titulo,
    text:mensagem,
    attachments:anexos
  });
}

export const MailUtil = () => {
  enviarEmail
}