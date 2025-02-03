const fs = require("fs");
const readline = require("readline");

const getFileStreamReader = async function (fileName) {
  // Create a file stream and an interface to read from that stream.
  try {
    const fileStream = fs.createReadStream(fileName);
    const fileStreamReader = readline.createInterface({
      input: fileStream,
    });
    return fileStreamReader;
  } catch (err) {
    throw new Error(`Error occurred in getFileStreamReader: ${err.message}`);
  }
};

async function getTopThreeMostVisitedURLs(fileName) {
  try {
    const lineRdr = await getFileStreamReader(fileName);
    let urlCounter = {};

    //Read each line from the stream and store the URL and the number of times they appeared against them.
    for await (const line of lineRdr) {
      const firstindex = line.indexOf('"');
      const secondIndex = line.indexOf('"', firstindex + 1);
      const urlString = line.substring(firstindex + 1, secondIndex);
      const url = urlString.split(" ")[1];
      urlCounter[url] = (urlCounter[url] || 0) + 1;
    }
    //Sort and return the top 3 most visited urls
    const arrCounter = Object.entries(urlCounter);
    arrCounter.sort((obj1, obj2) => obj2[1] - obj1[1]);
    return arrCounter.slice(0, 3).map((entry) => entry[0]); // Return only the URLs
  } catch (err) {
    throw new Error(
      `Error occurred in getTopThreeMostVisitedURLs: ${err.message}`
    );
  }
}

async function getTopThreeMostActiveIPs(fileName) {
  try {
    const lineRdr = await getFileStreamReader(fileName);
    const ipCounter = {};

    //Read each line from the stream and store the ip and the number of times they appeared against them.
    for await (const line of lineRdr) {
      const ip = line.split(" ")[0];
      ipCounter[ip] = (ipCounter[ip] || 0) + 1;
    }

    //Sort and return the top 3 most visited urls
    const ipCounterRes = Object.entries(ipCounter);
    ipCounterRes.sort((obj1, obj2) => obj2[1] - obj1[1]);
    return ipCounterRes.slice(0, 3).map((entry) => entry[0]);
  } catch (err) {
    throw new Error(
      `Error occurred in getTopThreeMostActiveIPs: ${err.message}`
    );
  }
}

async function getNumberOfUniqueIPs(fileName) {
  try {
    const lineRdr = await getFileStreamReader(fileName);
    const uniqueIps = new Set();

    //Read each line from the stream and store all the IPS in a Set.
    for await (const line of lineRdr) {
      uniqueIps.add(line.split(" ")[0]);
    }
    //Return the number of unique IPs.
    return Array.from(uniqueIps).length;
  } catch (err) {
    console.log(`Error in [getNumberOfUniqueIPs]: ${err}`);
    throw new Error("Error occured in getNumberOfUniqueIPs");
  }
}

module.exports = {
  getFileStreamReader,
  getTopThreeMostVisitedURLs,
  getTopThreeMostActiveIPs,
  getNumberOfUniqueIPs,
};
