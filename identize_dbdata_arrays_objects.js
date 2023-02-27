const fs = require("fs");
const uuid = require("uuid");

const filePath = "./db_mock_data.json";
const jsonData = fs.readFileSync(filePath, { encoding: "utf-8" });
const jsonObj = JSON.parse(jsonData);

for (const arrEntityFname of Object.getOwnPropertyNames(jsonObj)) {
  const entityArr = jsonObj[arrEntityFname];
  console.log('arrEntityFname', arrEntityFname)
  console.log('entityArr', entityArr);
  for (const obj of entityArr) {
    if (!obj.id) {
      obj.id = uuid.v4();
    }
  }
}

fs.writeFileSync(filePath, JSON.stringify(jsonObj, null, 2), {
  encoding: "utf-8",
});
