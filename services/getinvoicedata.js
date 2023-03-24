import axios from "axios";

export const getInvoiceData = async (file) => {
  let response;
  try {
    let formData = new FormData();
    formData.append("file", file);
    response = await axios.post(
      "https://senyone-invoice-api.onrender.com/invoices",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  return response?.data;
};
