# SQL-Editor

This project is a part of Atlan Frontend Engineer Hiring Process.


## What does the project do?
This project is a **simple UI of a SQL Editor** for data analysts which helps them to query data. Below are the **UI only features**:
 - Users can use SQL editor to write their queries
 - SQL Editor has Auto Completion feature for faster query writing
 - Users can view the data tables and the available columns on the left panel
 - Users can execute or save their queries for future use
 - Users can download the quesry results in CSV format
 - Users can share the query results with fellow analysts via email.


## What have I used in this project?
- Angular version 12.1.0
- Tailwind CSS 2.2.4
- ng-2-ace-editor 0.3.9

## Demo
[Project hosted on Netlify](https://happy-jennings-37ebca.netlify.app/)

## Page Load Time
###  1.3 second

![Page Load Time](https://i.ibb.co/t89csbP/Screenshot-2021-07-07-at-5-11-36-PM.png)

## What I did to optimize page load time?
1. Used CSS Purge to remove unused styles.
2. Minified the build files using webpack.
3. Enabled CSS JIT so that build file is much smaller.
4. Used Netlify to host the static files which uses CDN and caches the static files.

## What else can be done to optimise the page load time?
1. Use of compression mechanism like Brotli or Gzip
2. Lossless image compression
