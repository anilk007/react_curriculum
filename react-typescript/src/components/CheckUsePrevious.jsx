import { useState } from 'react';

import usePrevious from './../hooks/usePrevious'

function CheckUsePrevious() {

    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <p>
                Now: {count}, Before: {prevCount}
            </p>
        </div>
    )
}

export default CheckUsePrevious
