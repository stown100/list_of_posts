import React from 'react';
import arrow from '../../images/down_icon-icons.com_61209.svg';

function Form({ search, handleChange, items, onClickSortIndex }) {

    const [onSelect, setOnSelect] = React.useState(false);
    const sortRef = React.useRef();

    const selectOpen = () => {
        setOnSelect(!onSelect)
    }

    // закрытие выпадающиего меню через esc
    const closeByEscape = (e) => {
        if (e.key === 'Escape') {
            setOnSelect(false);
        }
    }
    // Клик вне области выпадающего меню
    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
        if (!path.includes(sortRef.current)) {
            setOnSelect(false);
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        document.addEventListener('keydown', closeByEscape)
    }, [])

    const onSelectIndex = (index) => {
        onClickSortIndex(index);
    }

    return (
        <div className='form'>
            <input className='form__input-search' type="text" value={search} onChange={handleChange} placeholder='Поиск по заголовку'></input>
            <ul className='form__select-sort'>
                <li className='sort-option' onClick={selectOpen} ref={sortRef}>
                    Сортировать по
                    <img className={`${onSelect ? 'sort-option__img' : 'sort-option__img_top'}`} src={arrow} alt='arrow' />
                </li>
                {items && items.map((item, index) => {
                    return (
                        <li key={`${item}_${index}`} className={`${onSelect ? 'sort-option' : 'sort-option_hidden'}`} onClick={() => onSelectIndex(index)}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Form