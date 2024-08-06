import { WhatDoIDoContainer, WhatDoIDoContainerCentral, WhatDoIDoContainerLeft, WhatDoIDoContainerRigth } from "./styles"

export const WhatDoIDo = () => {
    return(
        <WhatDoIDoContainer>
            <WhatDoIDoContainerLeft>
                <h2>Front-End</h2>
            </WhatDoIDoContainerLeft>
            <WhatDoIDoContainerCentral/>
            <WhatDoIDoContainerRigth>
                <h2>Backend</h2>
            </WhatDoIDoContainerRigth>
        </WhatDoIDoContainer>
    )
}