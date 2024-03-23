import {type PlasmoMessaging, sendToBackground} from '@plasmohq/messaging';
import {reloadGeneratorsMenuItems} from '~src/background/main';

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    await reloadGeneratorsMenuItems();
    res.send({
        message: 'OK'
    });
};

export default handler;

export const sendUpdateGeneratorsMessage = async () => {
    await sendToBackground({
        name: 'updateGenerators',
        body: {}
    });

};