export function editableContentManage() {
    function saveContent() {
        const editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(element => {
            localStorage.setItem(element.id, element.innerText);
        });
    }

    function loadContent() {
        const editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(element => {
            const savedContent = localStorage.getItem(element.id);
            if (savedContent) {
                element.innerText = savedContent;
            }
        });
    }

    document.addEventListener('input', saveContent);
    window.addEventListener('load', loadContent);
}