import React from "react";

export interface I_ContextState {
    route: string;
    setRoute: (route: string) => void;
}

const defaultContextState: I_ContextState = {
    route:    "",
    setRoute: () => null
};

export const SiteRoutesContext = React.createContext(defaultContextState);

export function SiteRoutesProvider(props: {
    children: React.ReactNode;
}): JSX.Element {
    const [ route, setRoute ] = React.useState<string>("");

    return (
        <SiteRoutesContext.Provider value={{
            route,
            setRoute
        }}>
            {props.children}
        </SiteRoutesContext.Provider>
    );
}
