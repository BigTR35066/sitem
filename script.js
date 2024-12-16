document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Tüm label'lardan selected sınıfını kaldır
        document.querySelectorAll('label').forEach(label => {
            label.classList.remove('selected'); // Seçili sınıfı çıkar
        });

        // Seçili radio butonunun etiketine selected sınıfı ekle
        const selectedLabel = document.querySelector(`label[for="${this.id}"]`);
        selectedLabel.classList.add('selected'); // Seçili sınıfı ekle
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
