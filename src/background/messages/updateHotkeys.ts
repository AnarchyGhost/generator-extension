import {type PlasmoMessaging, sendToBackground} from '@plasmohq/messaging';
import {reloadHotkeys} from '~src/background/main';

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    await reloadHotkeys();
    res.send({
        message: 'OK'
    });
};

export default handler;

export const sendUpdateHotkeysMessage = async () => {
    await sendToBackground({
        name: 'updateHotkeys',
        body: {}
    });

};