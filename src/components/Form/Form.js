import React from 'react'

function Form({ search, handleChange, onClickPost, items, sortPosts }) {
    return (
        <div className='form'>
            <input className='form__input-search' type="text" value={search} onChange={handleChange} placeholder='Поиск по названию'></input>
            <select className='form__select-sort'>
                <option className='sort-option'>Сортировать по</option>
                {items && items.map((name, index) => {
                    return (
                        <option className='sort-option'  key={`${name}${index}`}>
                            {name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Form