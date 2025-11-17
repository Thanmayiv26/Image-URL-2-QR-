document.addEventListener('DOMContentLoaded', () => {
    const imageLinkInput = document.getElementById('imageLinkInput');
    const generateQrBtn = document.getElementById('generateQrBtn');
    const qrcodeContainer = document.getElementById('qrcode');

    // Default image link (you can change this)
    // IMPORTANT: Google Drive links like the one you had (view?usp=drivesdk)
    // are often not direct image links and might require user interaction
    // or special embedding. Use a direct image URL (ending in .jpg, .png, etc.)
    // for best results.
    const defaultImageLink = "https://picsum.photos/200/300"; // Example: a random image

    // Set the default value in the input field
    imageLinkInput.value = defaultImageLink;

    // Function to generate the QR code
    function generateQrCode() {
        const currentImageLink = imageLinkInput.value.trim();

        // Clear any existing QR code
        qrcodeContainer.innerHTML = '';

        if (!currentImageLink) {
            alert('Please enter an image URL!');
            return;
        }

        // Generate QR code using QRCode.toCanvas
        QRCode.toCanvas(
            currentImageLink,
            { errorCorrectionLevel: 'M', margin: 2, scale: 6 }
        )
        .then(canvas => {
            qrcodeContainer.appendChild(canvas);
            console.log("QR Code generated for:", currentImageLink);
        })
        .catch(err => {
            console.error('QR code generation error:', err);
            alert('Failed to generate QR code. Please check the URL. Error: ' + err.message);
        });
    }

    // Generate QR code on page load with the default link
    generateQrCode();

    // Add event listener for the button click
    generateQrBtn.addEventListener('click', generateQrCode);

    // Optional: Allow pressing Enter in the input field to generate QR
    imageLinkInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            generateQrCode();
        }
    });
});
