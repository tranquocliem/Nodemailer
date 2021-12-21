const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.post("/sendMail", async (req, res) => {
  const { email } = req.body;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "quocliem1999@gmail.com", // generated ethereal user
      pass: "0918109492liem", // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail(
    {
      from: "quocliem1999@gmail.com", // sender address
      to: `${email}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    },
    (err) => {
      if (err) {
        return res.json({
          message: "Lỗi",
          err,
        });
      }
      return res.json({
        message: `Đã gửi mail thành công cho tài khoản ${email}`,
      });
    }
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server Run With Port ${PORT}`));
