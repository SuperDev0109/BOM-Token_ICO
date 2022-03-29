import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
const url = "https://api.verideal.net/uploads/BOM_white_paper_1.0.0.pdf";

const handler = async (req, res) => {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=BOM_white_paper_1.0.0.pdf"
  );
  await pipeline(response.body, res);
};

export default handler;
