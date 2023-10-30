const { MongoClient, ServerApiVersion } = require("mongodb");

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = new MongoClient(
      "mongodb+srv://shivam18557:Shivam@cluster0.njwclar.mongodb.net/meetups?retryWrites=true&w=majority",
      {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      }
    );

    console.log(data);

    console.log("check connection");

    await client.connect();

    const db = client.db("meetups");

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
