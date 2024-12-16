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
    if (currentPage < 3) {
        window.location.href = `page${currentPage + 1}.html`;
    } else {
        alert('Teşekkürler! Anket tamamlandı.');
    }
}
