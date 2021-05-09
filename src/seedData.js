import { data } from "./Data";
import faker from "faker";

export function generateData() {
  faker.seed(123);
  const views = ["199k", "1.5M", "1.9M", "546K", "237K"];
  let generatedData = [];
  for (let i = 0; i < data.length; i++) {
    let obj = {};
    obj = { ...data[i] };
    obj.id = faker.datatype.uuid();
    obj.avatar = faker.image.avatar();
    obj.owner = faker.company.companyName();
    obj.views = views[Math.floor(Math.random() * views.length)];
    obj.age = "7 years ago";
    generatedData.push(obj);
  }
  return generatedData;
}
