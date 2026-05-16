document.getElementById('envelope').addEventListener('click', function() {
    const envelope = this;
    
    // 1. Buka amplop
    envelope.classList.add('open');
    
    // 2. Ledakkan bunga menuhin layar
    bloomToFullScreen();
    
    // 3. Teks "A Bouquet for you" muncul perlahan
    setTimeout(() => {
        document.getElementById('bouquetContainer').classList.add('show');
    }, 1000);
});

function bloomToFullScreen() {
    const garden = document.getElementById('garden');
    const totalFlowers = 120; // Banyakin biar makin penuh layarnya kayak di foto

    // Gunakan aset PNG transparan lu sendiri nanti
    const flowerImages = [
        'https://cdn-icons-png.flaticon.com/512/3113/3113047.png', // Bunga pink
        'https://cdn-icons-png.flaticon.com/512/1043/1043349.png', // Bunga kuning
        'https://cdn-icons-png.flaticon.com/512/2926/2926754.png', // Daun/kelopak
        'https://cdn-icons-png.flaticon.com/512/1043/1043361.png'  // Bunga ungu
    ];

    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower-particle');
        
        // Pilih gambar acak
        const randomImg = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        flower.style.backgroundImage = `url('${randomImg}')`;
        
        // HITUNG KOORDINAT ACAK SE-LAYAR PENUH
        // Dikurang 50% karena titik awal spawn ada di tengah layar (top 50%, left 50%)
        const targetX = (Math.random() - 0.5) * window.innerWidth;
        const targetY = (Math.random() - 0.5) * window.innerHeight;
        
        // Variasi ukuran bunga (ada yang kecil di belakang, gede di depan biar estetik)
        const size = Math.random() * 60 + 30; // Ukuran antara 30px - 90px
        
        // Rotasi acak pas mekar
        const rotation = Math.random() * 720 - 360;
        
        // Variasi opacity biar gak kaku (ada yang rada transparan di background)
        const opacity = Math.random() * 0.4 + 0.6; // Opacity 0.6 sampai 1.0

        // Masukkan variabel ke CSS
        flower.style.setProperty('--x', `${targetX}px`);
        flower.style.setProperty('--y', `${targetY}px`);
        flower.style.setProperty('--r', `${rotation}deg`);
        flower.style.setProperty('--size', `${size}px`);
        flower.style.setProperty('--opac', opacity);
        
        // Efek semburan bertahap (delay acak)
        flower.style.animationDelay = `${Math.random() * 1.5}s`;
        
        garden.appendChild(flower);
    }
}