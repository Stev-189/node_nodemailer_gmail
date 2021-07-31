import nodemailer from 'nodemailer';
import { configSource } from './config';

//configuracion de mail de origen
const transporter = nodemailer.createTransport({
  service: configSource.service,
  auth: {
    user: configSource.user,
    pass: configSource.pass
  }
});

let message = 'Hola soy el mensaje...';

//configuracion de envio de correo
const mailOptions = {
  from: configSource.user,
  to: 'stevtemp189@gmail.com',
  subject: 'mailde prueba',
  //text: message //ejemplo de mensaje plano
  html: ` <b>Hola soy un mensaje nehtml</b>
          <TABLE BORDER>
	        <TR>
	        	<TD ROWSPAN=2>Item 1</TD>
	            	<TD>Item 2</TD> <TD>Item 3</TD> <TD>Item 4</TD>
	        </TR>
	        <TR>
	        	<TD>Item 5</TD> <TD>Item 6</TD> <TD>Item 7</TD>
	        </TR>
          </TABLE>`
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log(error);
  } else {
    console.log('Email enviado: '+ info.response);
  }
});