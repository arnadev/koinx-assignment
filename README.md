# koinx-assignment
My assignment for the KoinX internship


CRYPTO API:

Brief: This server stores and provides some simple data and stats related to the crypto currencies BTC, ETH, and matic-network.

Working:
TASK1: 
/routines/backgroundJob.js contains the code which fetches the Price, Market Cap, and 24 hour change, and stores them in a Local MongoDB Database (KoinXassignment). This is done every two hours using the node-cron module.

A single, simple schema is used to store all data, anew document is created for every new data retrieval. I’ve used this over an array as MongoDB document’s have a size limit, and a very large array may get messy to handle.



Routes: [port 8000]
TASK2:
/stats?coin=<coin-name> => retrieves price, market cap, and 24 hour change for the coin specified in the query parameter.

TASK3:
/deviation?coin=<coin-name> => calculates standard deviation for at most past 100 price values for the specified coin and returns it.


RUNNING CODE:
-Execute index.js (npm start)

Note: please make sure to install the dependencies via npm install
