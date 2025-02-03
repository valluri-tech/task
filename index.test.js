const {
  getFileStreamReader,
  getTopThreeMostVisitedURLs,
  getTopThreeMostActiveIPs,
  getNumberOfUniqueIPs,
} = require("./index");

describe("Check if we are able to - ", () => {
    test("get the file stream reader for the correct file name", async () => {
      const fileStreamReader = await getFileStreamReader("./programming-task-example-data.log");
      expect(fileStreamReader).toBeDefined()
    });

  test("getTopThreeMostVisitedURLs", async () => {
    const res = await getTopThreeMostVisitedURLs("./programming-task-example-data.log");
    expect(res).toStrictEqual([
      "/docs/manage-websites/",
      "/intranet-analytics/",
      "http://example.net/faq/",
    ]);
  });

  test("getTopThreeMostActiveIPs", async () => {
    const res = await getTopThreeMostActiveIPs("./programming-task-example-data.log");
    expect(res).toStrictEqual([
      "168.41.191.40",
      "177.71.128.21",
      "50.112.00.11",
    ]);
  });

  test("getNumberOfUniqueIPs", async () => {
    const res = await getNumberOfUniqueIPs("./programming-task-example-data.log");
    expect(res).toStrictEqual(11);
  });
});