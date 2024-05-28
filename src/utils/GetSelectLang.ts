import { SelectLang } from "../App";




export function getSelectLang<T>(key: string, defaultValue: string): string {
    let state = localStorage.getItem(key)
    if(state !== null) {
        return state
        debugger
    } else {
        debugger
        return defaultValue
    }
}