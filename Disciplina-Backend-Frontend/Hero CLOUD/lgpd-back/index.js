import  express from "express";
import  pkg from "body-parser";
import router  from "./routes/router.js";

import sequelize from "./utils/database.js";
import association from "./models/Associations.js";
import cors from "cors";

const app = express();
const { json, urlencoded } = pkg;


app.use(json());
app.use(urlencoded({ extend: true }));
app.use(cors());

(async () => {
  try {
    association.associations();
    await sequelize.sync();
    app.listen(3000, function () {
      console.log("listening on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
})();



app.use("/", router);
