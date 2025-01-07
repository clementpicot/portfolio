import PlausibleProvider from 'next-plausible'

export default function Plausible({children}) {
    return (
        <PlausibleProvider domain="clmntpct.xyz">
            {children}
        </PlausibleProvider>
    )
}