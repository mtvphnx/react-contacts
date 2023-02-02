import './Filter.scss';

export const Filter = ({role, country, toggleState}) => {
    const roleList = [
        {key: 0, name: 'all', text: 'Все роли'},
        {key: 1, name: 'contact', text: 'Контакт'},
        {key: 2, name: 'speaker', text: 'Спикер'},
        {key: 3, name: 'agent', text: 'Контрагент'}
    ]

    const countriesList = [
        {key: 0, name: 'all', text: 'Все страны'},
        {key: 1, name: 'russia', text: 'Россия'},
        {key: 2, name: 'usa', text: 'США'}
    ]

    const onClickRole = (e) => {
        const name = e.currentTarget.getAttribute('data-name');
        toggleState('role', name);
    }

    const onClickCountry = (e) => {
        const name = e.currentTarget.getAttribute('data-name');
        toggleState('country', name);
    }

    const roles = roleList.map(item => {
        const {key, name, text} = item;

        const activeFilter = role === name,
            classNames = activeFilter ? 'active' : '';

        return (
            <button
                key={key}
                type="button"
                data-name={name}
                className={`btn btn-outline-light ${classNames}`}
                onClick={e => onClickRole(e)}>
                {text}
            </button>
        );
    })

    const countries = countriesList.map(item => {
        const {key, name, text} = item;

        const activeFilter = country === name,
            classNames = activeFilter ? 'active' : '';

        return (
            <button
                key={key}
                type="button"
                data-name={name}
                className={`btn btn-outline-light ${classNames}`}
                onClick={e => onClickCountry(e)}>
                {text}
            </button>
        );
    })


    return (
        <>
            <div className="btn-group">
                {roles}
            </div>
            <div className="btn-group">
                {countries}
            </div>
        </>
    );
}
