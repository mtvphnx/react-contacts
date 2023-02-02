import './Element.scss';

export const Element = ({name, role, country}) => {
    const data = [
        {key: 1, name: 'phone', text: 'Телефон', phone: '+79228411043', email: 'matvey.phoen1x@yandex.ru'},
        {key: 2, name: 'envelope-open', text: 'Почта', phone: '+79228411043', email: 'matvey.phoen1x@yandex.ru'}
    ]

    const buttons = data.map(item => {
        const {key, name, text, phone, email} = item;

        return (
            <a href={name === 'phone' ? `tel:${phone}` : `mailto:${email}`} t key={key} className={`btn-test btn-sm`} title={text}>
                <i className={`fas fa-${name}`}/>
            </a>
        );
    })

    const currentCountry = country === 'russia' ? 'Россия' : country === 'usa' ? 'США' : '';
    const currentRole = role === 'contact' ? 'Контакт' : role === 'agent' ? 'Контрагент' : role === 'speaker' ? 'Спикер' : '';

    return (
        <li className={`list-group-item d-flex justify-content-between`}>
            <span className="list-group-item-label">{name}</span>
            <div className="list-group-item-input value">{currentRole}</div>
            <div className="list-group-item-input value">{currentCountry}</div>
            <div className='d-flex justify-content-center align-items-center'>
                {buttons}
            </div>
        </li>
    );
}
