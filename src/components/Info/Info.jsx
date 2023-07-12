import './Info.scss';

export const Info = ({data}) => {
    // const star = data.filter(item => item.star).length;

    return (
        <div className="info">
            <h3>Общее число контактов: {data.length}</h3>
        </div>
    );
}
