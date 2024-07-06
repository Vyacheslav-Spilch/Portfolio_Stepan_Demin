import { SelectLang } from "../App";




export function getSelectLang(key: string, defaultValue: string): string {
    let state = localStorage.getItem(key)
    if(state !== null) {
        return state
    } else {
        return defaultValue
    }
}