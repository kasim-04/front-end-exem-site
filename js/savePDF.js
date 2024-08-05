export function savePDF() {
    const downloadButton = document.getElementById('download');
    const contentToDownload = document.getElementById('content-to-download');

    downloadButton.addEventListener('click', () => {
        const opt = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(contentToDownload).save();
    });
}