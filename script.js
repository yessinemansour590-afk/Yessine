function openProduct(name, price, img) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img;
    document.getElementById('productModal').style.display = "block";
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

function sendWhatsApp() {
    const name = document.getElementById('modalName').innerText;
    const price = document.getElementById('modalPrice').innerText;
    const size = document.getElementById('sizeSelect').value;
    const color = document.getElementById('colorSelect').value;
    
    const text = `Hello Elite Footwear! I want to order:
Model: ${name}
Price: ${price}
Size: ${size}
Color: ${color}`;

    window.open(`https://wa.me/21656206785?text=${encodeURIComponent(text)}`, '_blank');
}
