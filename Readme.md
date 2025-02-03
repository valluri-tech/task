# Documentation
1. **getTopThreeMostVisitedURLs** : This function return the top 3 most visited URLs.If there are multiple URLs that match the same count the top URLs from the file are picked.
2. **getTopThreeMostActiveIPs** : This function returns the top 3 most active IPs.If there are multiple IPs that match the same count the top IPs from the file are picked.
3. **getNumberOfUniqueIPs** : Gets the number of unique IP addresses.

## Instructions
1. To install npm packages run the command : **npm i**
2. To run the tests run the command : **npm run test**.

## Assumptions
1. The file reading logic has been written to accomodate large file sizes.
2. Tests have been written to verify the data against the file "programming-task-example-data.log"
3. We have assumed that the data always exists in the file "programming-task-example-data.log"
4. We have also assumed that the URL occurs as part of a bigger string that is enclosed in quotes and also that this quoted string appears before any other similar strings.