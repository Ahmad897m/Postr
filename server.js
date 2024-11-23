const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// إعداد المسار الثابت للملفات
app.use('/Devad.io', express.static(path.join(__dirname, 'product')));

// المسار لتقديم صفحة postr.html
app.get('/Devad.io/product/postr', (req, res) => {
    res.sendFile(path.join(__dirname, 'product', 'postr.html'));
});

// المسار لتقديم صفحة Terms-of-use.html
app.get('/Devad.io/product/Terms-of-use.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'product', 'Terms-of-use.html'));
});
// المسار لتقديم صفحة Privacy-policy.html
app.get('/Devad.io/product/Privacy-policy.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'product', 'Privacy-policy.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/Devad.io/product/postr`);
});
