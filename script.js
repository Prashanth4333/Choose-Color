document.addEventListener('DOMContentLoaded', function() {
    var colorInput = document.getElementById('input');
    var changeButton = document.querySelector('button');

    function changeBackgroundColor() {
        var colorValue = colorInput.value.trim();
        if (colorValue !== '') {
            document.body.style.backgroundColor = colorValue;
            colorInput.value = '';
        }
    }

    colorInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            changeBackgroundColor();
        }
    });

    changeButton.addEventListener('click', changeBackgroundColor);
});
