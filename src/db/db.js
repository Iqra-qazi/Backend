import dns from 'node:dns/promises'
dns.setServers(['1.1.1.1','8.8.8.8'])

import mongoose from "mongoose"
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://iqraq577_db_user:tzwKqNNNuGxQseTo@sit-web.fmeixjc.mongodb.net/user');
  console.log("Connected to DB");
}
export default main