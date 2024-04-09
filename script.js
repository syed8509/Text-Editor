$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  const colorPalette = ['C0392B', 'E74C3C', 'D35400', 'E67E22', 'F39C12', 'F1C40F', '2ECC71', '27AE60', '3498DB', '2980B9', '9B59B6', '8E44AD', '34495E', '2C3E50', '000000', '7F8C8D', '95A5A6', 'BDC3C7', 'ECF0F1', 'FFFFFF'];
  const forePalette = $('.fore-palette');
  const backPalette = $('.back-palette');
  const editor = $('.editor');


  colorPalette.forEach(color => {
    forePalette.append(`<a href="#" data-command="foreColor" data-value="#${color}" style="background-color: #${color};" class="palette-item"></a>`);
    backPalette.append(`<a href="#" data-command="backColor" data-value="#${color}" style="background-color: #${color};" class="palette-item"></a>`);
  });

  $('.toolbar a').click(function (e) {
    e.preventDefault();
    const command = $(this).data('command');
    let url;

    if (command === 'h1' || command === 'h2' || command === 'p') {
      document.execCommand('formatBlock', false, command);
    } else if (command === 'foreColor' || command === 'backColor') {
      const color = $(this).data('value');
      document.execCommand($(this).data('command'), false, color);

      // alert(color); // Debugging purposes
    } else if (command === 'removeFormat') {
      document.execCommand('removeFormat', false, command);
    } else if (command === 'createlink' || command === 'insertimage') {
      url = prompt('Enter the link here: ', 'http://');
      if (url !== null) {
        document.execCommand(command, false, url);
      }

      // console.log(command + " " + url); // Debugging purposes
    } else {
      document.execCommand(command, false, url);
    }
  });

  $('.editorAria img').click(function () {
    document.execCommand('enableObjectResizing', false);
  });

  $("#getHTML").click(function () {
    const editorId = $(this).attr('get-data');
    const html = $("#" + editorId).find('.editorAria').html();
    
    // alert(html); // Debugging purposes
    console.log(html); // Log HTML to console instead of alerting
  });
  $(document).ready(function () {
    const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px'];
    let currentFontSizeIndex = 0;

    $(document).ready(function () {
      const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px'];
      let currentFontSizeIndex = 3; // Start with default font size index

    });
  });
  $(document).ready(function () {
    // Define the font size options
    const fontSizeOptions = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '40px', '48px', '56px', '64px', '72px', '96px'];
  
    // Select the font size palette element
    const fontSizePalette = $('.font-size-palette');
  
    // Select the text editor element
    const editor = $('.editor');
 // Function to update font size
 function updateFontSize(fontSize) {
  editor.css('font-size', fontSize);
}

// Populate font size palette
fontSizePalette.empty(); // Clear previous contents
fontSizeOptions.forEach(function (fontSize) {
  const fontSizeDiv = $('<div>').addClass('font-size').text(fontSize);
  fontSizeDiv.click(function () {
    updateFontSize(fontSize);
  });
  fontSizePalette.append(fontSizeDiv);
});
});  

});
