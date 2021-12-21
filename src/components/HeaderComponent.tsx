import React from 'react';

interface IHeaderComponentProps {
    content: string;
}

class HeaderComponent extends React.Component<IHeaderComponentProps, Record<string, unknown>> {
    public render(): React.ReactNode {
        const me: HeaderComponent = this;

        return (
            <h1>
                {me.props.content}
            </h1>
        );
    }
}
export default HeaderComponent;
