import * as paymentProvider from 'interfaces-psp-v1-payment-service-provider';

/** @returns {import('interfaces-psp-v1-payment-service-provider').PaymentServiceProviderConfig} */
export function getConfig() {
    return {
        title: 'Blockonomics Payments', // Ensure the title is a string
        paymentMethods: [
            {
                hostedPage: {
                    title: 'Blockonomics Payments',
                    logos: {
                        white: {
                            svg: 'https://static.wixstatic.com/shapes/94b5e2_403ceb582027431cb92f38fd18d1843c.svg',
                            png: 'https://freesvg.org/img/15930333081593032446pitr_Bananas_icon.png'
                        },
                        colored: {
                            svg: 'https://static.wixstatic.com/shapes/94b5e2_403ceb582027431cb92f38fd18d1843c.svg',
                            png: 'https://freesvg.org/img/15930333081593032446pitr_Bananas_icon.png'
                        }
                    }
                }
            }
        ],
        credentialsFields: [
            {
                simpleField: {
                    name: 'apikey',
                    label: 'Blockonomics API key'
                }
            },
            {
                simpleField: {
                    name: 'callbackurl',
                    label: 'Blockonomics Callback URL',
                    
                }
            }
        ]
    };
}
