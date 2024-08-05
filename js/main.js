import image from './components/image.js';
import intro from './components/intro.js';
import languages from './components/languages.js';
import experience from './components/experience.js';
import tools from './components/tools.js';
import education from './components/education.js';
import interests from './components/interests.js';
import contact from './components/contact.js';

import { initSlider } from './slider.js';
import { editableContentManage } from './editableManage.js';
import { savePDF } from './savePDF.js';

document.querySelector('#app').innerHTML = `
    <header class="header">
        <button class="download-button text-1" id="download">Скачать PDF</button>
    </header>
    <main class="container" id="content-to-download">
        ${image()}
        ${intro()}
        ${languages()}
        ${experience()}
        ${tools()}
        ${education()}
        <div class="interests-and-contact">
            ${interests()}
            ${contact()}
        </div>
    </main>
`;

editableContentManage()
initSlider()
savePDF()
