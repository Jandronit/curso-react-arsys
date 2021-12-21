import React from 'react';
import ListComponent from "./ListComponent";
interface ITableComponent {
}
interface  ITodo{
    id: number;
    name: string;
    completed: boolean;
}
class TableComponent extends React.Component<ITableComponent> {

    public render(): React.ReactNode {
        const misTodos : ITodo[] = [

            { id : 1, name : "Venir a clase", completed : true },
            { id : 2, name : "Leer más", completed : false },
            { id : 3, name : "Hacer más deporte", completed : false },
            { id : 4, name : "Descansar en Navidad", completed : false },

        ];
        const me: TableComponent = this;
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Completed</th>
                        <th>Deleted Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        misTodos.map( ( todo : ITodo ) => {
                            return <ListComponent
                                id={ todo.id }
                                name={ todo.name }
                                completed={ todo.completed }
                            >
                                <strong>Action</strong>
                            </ListComponent>
                        } )
                    }
                    </tbody>
                </table>

            </div>
    );
    }
}
export default TableComponent;
