import {MdOutlineArchive, MdHistory} from 'react-icons/md';
import {BsBookmark} from 'react-icons/bs';
import {SlDiamond} from 'react-icons/sl';
import {GiAchievement} from 'react-icons/gi';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {BiBarcode} from 'react-icons/bi';

export const profileDropDownCards = {
    icons: [
        <MdOutlineArchive key='archive'/>,
        <BsBookmark key='bookmark'/>,
        <MdHistory key='history'/>,
        <SlDiamond key='diamond'/>,
        <GiAchievement key='achievement'/>,
        <BiBarcode key='barcode'/>,
        <AiOutlineCreditCard key='card'/>
    ],
    cardsText: ['Покупки', 'Смотреть позже', 'История просмотров', 'Подписки', 'Активация сертификата', 'Вход по коду', 'Способы оплаты'],
}