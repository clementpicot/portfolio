import PlausibleProvider from 'next-plausible'

export default function PlausibleProvider({children}) {
    return (
        <PlausibleProvider domain="clmntpct.xyz">
            {children}
        </PlausibleProvider>
    )
}