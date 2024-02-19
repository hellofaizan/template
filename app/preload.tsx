'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
    ReactDOM.preload('sprite.svg');
    return null;
}
