export function initSlider() {
    document.addEventListener('DOMContentLoaded', () => {
        const languageLevels = document.querySelectorAll('.language-level');

        languageLevels.forEach((level, index) => {
            const fill = document.getElementById(`language-level-fill-${index + 1}`);
            let isDragging = false;

            const savedWidth = localStorage.getItem(`language-level-fill-${index + 1}`);
            if (savedWidth) {
                fill.style.width = savedWidth;
            } else {
                fill.style.width = '50%';
            }

            level.addEventListener('mousedown', (e) => {
                isDragging = true;
                level.classList.add('dragging');
                updateWidth(e);
            });

            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    updateWidth(e);
                }
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
                level.classList.remove('dragging');
            });

            function updateWidth(e) {
                const rect = level.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const percentage = (offsetX / rect.width) * 100;
                const newWidth = `${Math.max(0, Math.min(100, percentage))}%`;
                fill.style.width = newWidth;

                localStorage.setItem(`language-level-fill-${index + 1}`, newWidth);
            }
        });
    });
}