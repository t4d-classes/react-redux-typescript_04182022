# Welcome to the React & Redux with TypeScript Class!

![Wintellect Logo](images/wintellect-logo.png "Wintellect Logo")

Wintellect helps you drive innovation by modernizing your applications and data. We offer Cloud Managed Services to save you money, maximize up-time, and enable you to focus on business strategy rather than managing IT infrastructure. And we skill up your team to enable them to quickly apply the latest technologies in software, cloud, DevOps and data. Wintellect is the partner that enables you to achieve more. A company of experts and a creator of experts. Wintellect: We Know How.

## License

All code in this repository is distributed under the [MIT license](license.txt).

## Configuration and Data for the REST API part of the class

To configure the REST API, two packages will need to installed into the project created by the Create React App generator.

1. To install those packages, run the following command from within the root folder of the project:

```bash
npm install -D json-server npm-run-all
```

2. Next, the `package.json` needs to be updated to easily run the REST API provides by the [JSON Server](https://github.com/typicode/json-server). Here is the `scripts` configuration which can be copied and pasted for the REST API. When asked by the instructor, replace the `scripts` section of the `package.json` file in the `demo-app` project with the `scripts` section below.

```json
"scripts": {
  "start": "run-p web rest",
  "web": "react-scripts start",
  "rest": "json-server --port 3060 ./db.json",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

3. Finally, the REST API data file needs to be created. The data file should be named `db.json` and placed in the project root folder. 

**VERY IMPORTANT! The `db.json` file will be placed in the `demo-app` folder, the same folder as the `package.json` file. The `db.json` file should **NOT** be placed in the `src` folder.**

4. The JSON below should be copied and pasted into the file.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {"id":1,"make":"Ford","model":"Fusion Hybrid","year":2019,"color":"blue","price":45000},
    {"id":2,"make":"Tesla","model":"S","year":2018,"color":"red","price":100000}
  ]
}
```

5. To verify the REST API is working, run the `npm start` command and browse the following URL: [http://localhost:3060/cars](http://localhost:3060/cars).

<br><br>
All course content and teaching is provided by: [T4D.IO](https://www.t4d.io)