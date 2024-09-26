// popup.js

document.addEventListener('keydown', function(event) {
    const statusDiv = document.getElementById('status');
    
    if (event.key === 'f' || event.key === 'F') {
        // Simuliere linken Mausklick
        statusDiv.textContent = 'Linker Mausklick mit Taste F';
        console.log('Linker Mausklick mit Taste F');
    } else if (event.key === 'j' || event.key === 'J') {
        // Simuliere rechten Mausklick
        statusDiv.textContent = 'Rechter Mausklick mit Taste J';
        console.log('Rechter Mausklick mit Taste J');
    }
});
