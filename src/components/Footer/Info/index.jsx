import React from 'react';

import { CONTACT } from 'core/constants/contacts.constant';

export const Info = () => {
    return(
        <address className='info'>
            {CONTACT.company}<br />
            {CONTACT.license}<br />
            {CONTACT.address}<br />
            {CONTACT.phone}, {CONTACT.email}<br />
            <div dangerouslySetInnerHTML={{ __html: CONTACT.workingRegime }}></div>
        </address>
        
    )
}