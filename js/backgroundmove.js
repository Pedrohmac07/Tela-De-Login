document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Movimenta levemente a imagem de fundo com base no mouse
    const offsetX = (x - 0.5) * 15; // ajuste o valor para mais ou menos movimento
    const offsetY = (y - 0.5) * 15;

    document.body.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
  });