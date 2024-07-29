document.addEventListener('DOMContentLoaded', (event) => {
    loadPage('home');
});

function loadPage(page) {
    let content = document.getElementById('content');
    switch (page) {
        case 'home':
            content.innerHTML = `
                <h1>Welcome to Infeeai</h1>
                <p>Infeeai is a cutting-edge learning platform powered by AI, built on top of GPT-4 and other advanced models with custom fine-tuning. Our mission is to provide precise, interactive solutions to enhance user learning experiences.</p>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>About Infeeai</h1>
                <p>Infeeai is designed to provide precise, interactive solutions by attentively listening to users and asking for clarifications when needed. It ensures all interactions are contextually relevant and useful.</p>
            `;
            break;
        case 'faq':
            content.innerHTML = `
                <h1>Frequently Asked Questions</h1>
                <p><strong>Q1:</strong> How does Infeeai work?<br><strong>A1:</strong> Infeeai listens attentively to users, asks for clarifications, and ensures it provides precise, interactive solutions.</p>
                <p><strong>Q2:</strong> What models does Infeeai use?<br><strong>A2:</strong> Infeeai is built on top of GPT-4 and other advanced models with custom fine-tuning.</p>
            `;
            break;
        case 'privacy':
            content.innerHTML = `
                <h1>Privacy Policy</h1>
                <p>Welcome to Infeeai - The learning solutions powered by AI. Our service, built on top of GPT-4 and other models with custom fine-tuning, is designed to provide precise, interactive solutions by attentively listening to users and asking for clarifications when needed.</p>
                <h2>Information Collection and Use</h2>
                <p>We collect various types of information in connection with the services we provide, including:</p>
                <ul>
                    <li>Personal information such as your name, email address, and contact details.</li>
                    <li>Usage data including interactions with our AI, preferences, and feedback.</li>
                </ul>
                <h2>How We Use Information</h2>
                <p>We use the collected information to:</p>
                <ul>
                    <li>Provide and maintain our service.</li>
                    <li>Improve and personalize user experience.</li>
                    <li>Understand and analyze how our service is used.</li>
                    <li>Communicate with users, including sending updates and notifications.</li>
                </ul>
                <h2>Data Security</h2>
                <p>Your data security is important to us. We implement various measures to ensure the safety and confidentiality of your information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
                <h2>Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@infeeai.com">info@infeeai.com</a>.</p>
            `;
            break;
        default:
            content.innerHTML = '<h1>Page Not Found</h1>';
            break;
    }
}
