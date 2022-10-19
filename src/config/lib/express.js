const path = require('path');
const express = require('express');

module.exports = () => {
    const app = express();
    const publicDirectoryPath = path.join(__dirname, "../../public");

    console.log(publicDirectoryPath);
    app.use(express.static(publicDirectoryPath));
    return app;
}