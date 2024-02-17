(function() {
    'use strict';

    // Watermark texts
    var watermark = `Criminal Squad <span class="user">${user}</span>`; // Updated watermark text

    // Style for the watermark
    var style = document.createElement('style');
    style.innerHTML = `
        .watermark {
            position: fixed;
            top: 10px;
            left: 10px;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            padding: 3px 5px;
            background-color: #221f22;
            color: #005aff;
            border-radius: 3px;
            z-index: 9999;
            pointer-events: none;
            box-shadow: 0 0 3px 2px #005aff;
        }
        .user {
            color: #fff !important;
        }
    `;

    document.head.appendChild(style);

    // Create watermark element
    var watermark = document.createElement('div');
    watermark.className = 'watermark';
    watermark.innerHTML = `${watermark}`;

    // Add watermark to the page
    document.body.appendChild(watermark);
})();
