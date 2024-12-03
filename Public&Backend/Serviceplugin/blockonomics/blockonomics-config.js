import * as paymentProvider from 'interfaces-psp-v1-payment-service-provider';

/** @returns {import('interfaces-psp-v1-payment-service-provider').PaymentServiceProviderConfig} */
export function getConfig() {
    // Customer Creates a blockonomics store with zpub, address and callback url.
        // where to get callback url?
        // Get wix store address (https://aishwaryaadyanthay.wixsite.com/my-site)
        // Our url extension (_functions/blockonomicscallback?secret=123353)

    return {
        title: 'Blockonomics Payments', // Ensure the title is a string
        paymentMethods: [
            {
                hostedPage: {
                    title: 'Blockonomics Payments',
                    logos: {
                        white: {
                            svg: 'https://raw.githubusercontent.com/ashthecoder05/wix-bitcoin-plugin/refs/heads/main/blockonomics_logo.svg',
                            png: 'https://freesvg.org/img/15930333081593032446pitr_Bananas_icon.png'
                        },
                        colored: {
                            svg: 'https://raw.githubusercontent.com/ashthecoder05/wix-bitcoin-plugin/refs/heads/main/blockonomics_logo.svg',
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
                    name: 'secret',
                    label: 'Secret'
                }
            }
        ]
    };
}
