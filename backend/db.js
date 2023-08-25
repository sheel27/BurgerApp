// const mongoose = require("mongoose");

// const URL = `mongodb://sheelparikh:sheelparikh@ac-zl3dl7v-shard-00-00.3n5irs1.mongodb.net:27017,ac-zl3dl7v-shard-00-01.3n5irs1.mongodb.net:27017,ac-zl3dl7v-shard-00-02.3n5irs1.mongodb.net:27017/burger?ssl=true&replicaSet=atlas-sg27v2-shard-0&authSource=admin&retryWrites=true&w=majority`;

// const Connection = async () => {
//   try {
//     await mongoose.connect(URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Database connected successfully");
//     const collection = mongoose.connection.db.collection("food_items");
//     collection.find({}).toArray(function (_error, data) {
//       global.food_items = data;
//       console.log(global.food_items);
//     });
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// };

// module.exports = Connection;

const mongoose = require("mongoose");

const URL = `mongodb://sheelparikh:sheelparikh@ac-zl3dl7v-shard-00-00.3n5irs1.mongodb.net:27017,ac-zl3dl7v-shard-00-01.3n5irs1.mongodb.net:27017,ac-zl3dl7v-shard-00-02.3n5irs1.mongodb.net:27017/burger?ssl=true&replicaSet=atlas-sg27v2-shard-0&authSource=admin&retryWrites=true&w=majority`;

const Connection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");

    const collection = mongoose.connection.db.collection("food_items");
    const data = await collection.find({}).toArray();
    global.food_items = data;
    // console.log(global.food_items);
    
    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();
    global.foodCategory = catData;
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

module.exports = Connection;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const Connection = async () => {
//   // const URL = `mongodb+srv://sheelparikh:sheelparikh@burger-app.3n5irs1.mongodb.net/burger?retryWrites=true&w=majority`;
//   const URL = `mongodb://sheelparikh:sheelparikh@ac-zl3dl7v-shard-00-00.3n5irs1.mongodb.net:27017,ac-zl3dl7v-shard-00-01.3n5irs1.mongodb.net:27017,ac-zl3dl7v-shard-00-02.3n5irs1.mongodb.net:27017/burger?ssl=true&replicaSet=atlas-sg27v2-shard-0&authSource=admin&retryWrites=true&w=majority`;
//   try {
//     await mongoose.connect(URL, { useNewUrlParser: true });
//     console.log("Database connected successfully");
//     // const fetched_data = await mongoose.connection.db.collection("food_items");
//     // fetched_data.find({}).toArray(function (_error, data) {
//     //   global.food_items = data;
//     //   console.log(global.food_items);
//     // });
//   } catch (error) {
//     console.log("Error while connecting with the database", error);
//   }
// };

// module.exports = Connection;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://parikh27:sheelparikh@burger.bxpr4js.mongodb.net/Burger?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("Connected!");
//     let fetched_data = mongoose.connection.db.collection("food_items");
//     let data = await fetched_data.find({}).toArray();
//     console.log(data);
//   } catch (error) {
//     console.log("err:", error);
//   }
// };
// module.exports = mongoDB;
