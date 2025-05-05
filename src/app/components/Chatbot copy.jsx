import { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        script.async = true;
        script.onload = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with Veena",
            "botConversationDescription": "N.A.V Yuva Foundation Support",
            "botId": "f901a93b-7cc2-448e-9cbd-9d5f9ebc69f8",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "cc9218e7-826a-4727-8993-eec86d64f2ed",
            "lazySocket": true,
            "themeName": "prism",
            "botName": "Veena",
            "avatarUrl": "",
            "stylesheet": "https://webchat-styler-css.botpress.app/prod/81b062f2-5808-4d29-b8be-c2b64efce5fe/v87952/style.css",
            "frontendVersion": "v1",
            "showBotInfoPage": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });
        };

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}, []);

    return <div id="botpress-webchat"></div>;
};

export default Chatbot;