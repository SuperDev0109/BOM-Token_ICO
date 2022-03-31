import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  try {
    console.log(req.body);

    const { email } = req.body;

    if (!email) {
      res.send({ result: 0, message: "Invalid data!" });
      return;
    }

    const new_user = await req.db.collection("subscribers").updateOne(
      { email: email }, //query
      { $set: { email: email } }, //update
      { upsert: true }
    );

    if (new_user) {
      res.send({ result: 1 });
    } else {
      res.send({ result: 0 });
    }
  } catch (error) {
    console.error(error.message);
    res.send({ result: 0, message: error.message });
  }
});

export default handler;
