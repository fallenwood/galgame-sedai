import { createEffect, createSignal } from "solid-js";

export const usePersistState = <T>(key: string, initialValue: T) => {
    const data = function () {
        const item = localStorage.getItem(key);
        if (item !== null && item !== undefined && item !== "undefined") {
            return JSON.parse(item) as T;
        }
        return initialValue;
    }();
    const [state, setState] = createSignal<T>(data);

    createEffect(() => {
        localStorage.setItem(key, JSON.stringify(state()));
    }, [state]);

    return [state, setState] as const;
};
