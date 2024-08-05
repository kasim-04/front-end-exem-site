export default function languages() {
    return `
        <section class="languages-box box">
            <h2 class="title-2">Languages</h2>
            <div class="languages-cards">
                <div class="languages-card">
                    <h3 class="title-3" id="language-1" contenteditable="true">English</h3>
                    <div class="language-level" id="language-level-1">
                        <div class="language-level-fill" id="language-level-fill-1"></div>
                    </div>
                </div>
                <div class="languages-card">
                    <h3 class="title-3" id="language-2" contenteditable="true">Malayalam</h3>
                    <div class="language-level" id="language-level-2">
                        <div class="language-level-fill" id="language-level-fill-2"></div>
                    </div>
                </div>
                <div class="languages-card">
                    <h3 class="title-3" id="language-3" contenteditable="true">Hindi</h3>
                    <div class="language-level" id="language-level-3">
                        <div class="language-level-fill" id="language-level-fill-3"></div>
                    </div>
                </div>
            </div>
        </section>
    `;
}