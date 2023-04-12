import { Parser } from "@json2csv/plainjs";

const downloadAsJson = (data) => {
  const element = document.createElement("a");
  const file = new Blob([JSON.stringify(data, null, 4)], {
    type: "application/json",
  });
  element.href = URL.createObjectURL(file);
  element.download = "data.json";
  document.body.appendChild(element);
  element.click();
};

const downloadAsCsv = (data) => {
  const element = document.createElement("a");
  const parser = new Parser();
  const csv = parser.parse(data);

  const file = new Blob([csv], { type: "text/csv" });
  element.href = URL.createObjectURL(file);
  element.download = "data.csv";
  document.body.appendChild(element);
  element.click();
};

export { downloadAsJson, downloadAsCsv };
