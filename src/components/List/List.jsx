import {Element} from "../../components";
import './List.scss';

export const List = ({data}) => {
    const elements = data.map(item => <Element {...item} />);

    const Error = () => <div className="error">Сотрудники не найдены</div>

    return (
        <ul className="app-list list-group">
            {data.length ? elements : <Error/>}
        </ul>
    );
}
