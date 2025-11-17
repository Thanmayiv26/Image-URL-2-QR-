[index.html](https://github.com/user-attachments/files/23588611/index.html)
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Image URL → QR GENERATOR </title>
  <link rel="stylesheet" href="styles.css"> <!-- Link your unique styles.css -->
  <!-- Using the qrcode.js library by davidshimjs -->
  <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
</head>
<body>

  <div class="container">
    <h1 class="page-title">Generate QR Code for Your Image</h1>
    <p class="instruction-text">Enter the direct link to your image below and click "Generate QR".</p>

    <div class="input-group">
      <label for="imageLinkInput">Image URL:</label>
      <input type="text" id="imageLinkInput" placeholder="e.g., https://example.com/your-image.jpg">
      <button id="generateQrBtn">Generate QR</button>
    </div>

    <div id="qrcode"></div>
    <p class="instruction-text small-text">Scan the QR code above to view the image.</p>
  </div>

  <script src="script.js"></script> <!-- Link your script.js -->

</body>
</html>
