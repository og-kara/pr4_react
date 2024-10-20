import { Card } from '../card/Card';
import s from './Catalog.module.css';
export function Catalog() {
    return (
        <section className={`container ${s.catalog}`}>
            <h2>Каталог</h2>
            <div className={s.cat}>
                <p>Категории:</p>
                <div className={s.btns}>
                    <buttton className='btn'>Все товары</buttton>
                    <buttton className='btn'>Шины/колеса</buttton>
                    <buttton className='btn'>Масла</buttton>
                    <buttton className='btn'>Ароматизаторы</buttton>
                </div>
            </div>
            <div className={s.cards}>
                <Card img='/card1.jpg' name='Автопарфюм' price='156' />
                <Card img='/card2.jpg' name='Автопарфюм' price='432' />
                <Card img='/card3.jpg' name='Автопарфюм' price='102' />
                <Card img='/card4.jpg' name='Автопарфюм' price='203' />
                <Card img='/card5.jpg' name='Автопарфюм' price='309' />
                <Card img='/card6.jpg' name='Автопарфюм' price='178' />
                <Card img='/card7.jpg' name='Автопарфюм' price='175' />
                <Card img='/card8.jpg' name='Автопарфюм' price='109' />
                <Card img='/card9.jpg' name='Автопарфюм' price='305' />
            </div>
            <a href="#">Загрузить еще товары</a>
        </section>
    )
}