import { useCallback, useSyncExternalStore } from "react"

function subscribeToLocalStorageChanges(callback: () => void) {
    window.addEventListener("storage", callback)
    return () => window.removeEventListener("storage", callback)
}

export function useLocalStorage(key: string) {
    const snapshot = useCallback(() => {
        return window.localStorage.getItem(key) || "";
    }, [key]);
    const setValue = useCallback((value: string | ((oldValue: string) => string)) => {
        window.localStorage.setItem(key,
            typeof value === "function" ? value(snapshot()) : value
        );
        window.dispatchEvent(new Event("storage"));
    }, [key, snapshot])
    const value = useSyncExternalStore(subscribeToLocalStorageChanges, snapshot, () => "");
    return [value, setValue] as const;
}

