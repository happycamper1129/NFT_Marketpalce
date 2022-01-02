import React from 'react';
import PreviewAttribute from "./PreviewAttribute";

const PreviewAttributes = ({attributes}) => {
    return (
        <div>
            {attributes.map(attribute =>
                <PreviewAttribute key={attribute.name}
                                  name={attribute.name}
                                  value={attribute.value}
                />
            )}
        </div>
    );
};

export default PreviewAttributes;