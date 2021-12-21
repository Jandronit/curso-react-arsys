import React from 'react';
interface IListElementoComponentProps {

    id        : number;
    name      : string;
    completed : boolean;
    children ?: React.ReactNode;
}

class ListComponent extends React.Component<IListElementoComponentProps> {
    public render(): React.ReactNode {
        const me: ListComponent = this;
        return (
            <tr>
                <th>{me.props.id}</th>
                <th>{me.props.name}</th>
                <th>{me.props.completed ? 'Completed' : 'noCompleted'}</th>
                <th>{ ( me.props.children !== undefined ) ? me.props.children : "None" }</th>
            </tr>
        );
    }
}
export default ListComponent;
