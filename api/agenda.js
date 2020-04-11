const agenda = new Agenda({ db: { address: process.env.ATLAS_MONGO_URI } });

// Or override the default collection name:
// const agenda = new Agenda({db: {address: mongoConnectionString, collection: 'jobCollectionName'}});

// or pass additional connection options:
// const agenda = new Agenda({db: {address: mongoConnectionString, collection: 'jobCollectionName', options: {ssl: true}}});

// or pass in an existing mongodb-native MongoClient instance
// const agenda = new Agenda({mongo: myMongoClient});

// agenda.define("delete old users", async job => {
//     await User.remove({ lastLogIn: { $lt: twoDaysAgo } });
// });

// (async function () {
//     // IIFE to give access to async/await
//     await agenda.start();

//     await agenda.every("3 minutes", "delete old users");

//     // Alternatively, you could also do:
//     await agenda.every("*/3 * * * *", "delete old users");
// })();
// agenda.define(
//     "send email report",
//     { priority: "high", concurrency: 10 },
//     async job => {
//         const { to } = job.attrs.data;
//         await emailClient.send({
//             to,
//             from: "example@example.com",
//             subject: "Email Report",
//             body: "..."
//         });
//     }
// );

// (async function () {
//     await agenda.start();
//     await agenda.schedule("in 20 minutes", "send email report", {
//         to: "admin@example.com"
//     });
// })();
