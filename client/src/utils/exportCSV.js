export const exportToCSV = (data, fileName = "TransitOps_Report") => {

  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]);

  const csvRows = [];

  csvRows.push(headers.join(","));

  data.forEach((row) => {

    csvRows.push(
      headers.map((header) => row[header]).join(",")
    );

  });

  const csvContent = csvRows.join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${fileName}.csv`;

  link.click();

  URL.revokeObjectURL(url);
};