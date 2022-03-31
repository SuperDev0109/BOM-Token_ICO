import nodemailer from "nodemailer";

const handler = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, message } = req.body;

    if (!first_name || !last_name || !email || !phone || !message) {
      res.send({ result: 0, message: "Invalid data!" });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      debug: true,
      logger: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const html = `<div>[Phone:] ${phone}</div><br/><div>${message}</div>`;

    const mailOptions = {
      from: `No Reply <noreply@bomcoin.com>`,
      to: [process.env.TO_EMAIL],
      replyTo: `${first_name} ${last_name}<${email}>`,
      subject: "BomCoin",
      text: message,
      html,
    };
    const sendResult = await transporter.sendMail(mailOptions);

    console.log("email send result:", sendResult);

    res.send({ result: 1 });
  } catch (error) {
    res.send({ result: 0, message: error.message });
  }
};

export default handler;
