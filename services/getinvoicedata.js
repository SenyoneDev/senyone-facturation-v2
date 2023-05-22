import axios from "axios";

export const getInvoiceData = async (file, folderName) => {
  let response;
  try {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("folderName", folderName || Date.now());
    response = await axios.post(
      "https://senyone-invoice-api.onrender.com/invoices",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "ApiKey dd98afe8-01d9-463f-be65-c226106a7228",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  return response?.data;
};
