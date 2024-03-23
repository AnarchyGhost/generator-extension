import {type PlasmoMessaging, sendToBackground} from '@plasmohq/messaging';
import {reloadGeneratorsMenuItems} from '~src/background/main';

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    await reloadGeneratorsMenuItems();
    res.send({
        message: 'OK'
    });
};

export default handler;

export async function sendUpdateGeneratorsMessage() {
    await sendToBackground({
        name: 'updateGenerators',
        body: {}
    });

}