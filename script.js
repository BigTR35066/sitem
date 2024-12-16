document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Önce tüm etiketlerin stillerini sıfırlayın
        document.querySelectorAll('label').forEach(label => {
            label.style.backgroundColor = '#ffb3d1'; // Normal arka plan
        });
        
        // Seçili radio butonunun etiketini koyulaştırın
        const selectedLabel = document.querySelector(`label[for="${this.id}"]`);
        selectedLabel.style.backgroundColor = '#ff4d94'; // Seçili arka plan
        selectedLabel.style.color = '#fff'; // Seçili metin rengi
    });
});

function nextPage(currentPage) {
    // Seçili form elemanını kontrol et
    const form = document.getElementById(`form${currentPage}`);
    const selectedActivity = form.querySelector('input[name="activity"]:checked');

    if (!selectedActivity) {
        alert('Lütfen bir seçenek işaretleyin!');
        return;
    }

    // Seçimi kaydedin (İsteğe bağlı)
    console.log(`Seçim ${currentPage}: ${selectedActivity.value}`);

    // Geçerli sayfayı gizleyin ve sonraki sayfayı gösterin
    if (currentPage < 3) {  // Toplam sayfa sayısına göre burayı değiştirin
        window.location.href = `page${currentPage + 1}.html`;
    } else {
        alert('Teşekkürler! Anket tamamlandı.');
    }
}
