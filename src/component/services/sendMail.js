import axios from 'axios';

export const sendContactMail = async (
    nome: string,
    senderMail: string,
    content: string
) => {
    const data = {
        name: nome,
        senderMail: senderMail,
        content: content
    };

    try {
        return await axios.post('/api/contact', data);
    } catch (error) {
        return error;
    }
};